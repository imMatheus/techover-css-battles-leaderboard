import { usersInfo } from './usersInfo'
import type { UserWithScore } from './usersInfo'
import { useState, useEffect } from 'react'

export function useLeaderboard() {
    const [users, setUsers] = useState<UserWithScore[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function getUserInfo() {
            try {
                const promises = []
                for (const user of usersInfo) {
                    promises.push(
                        fetch(
                            `https://us-central1-cssbattleapp.cloudfunctions.net/getRank?userId=${user.id}`
                        ).then((data) => data.json())
                    )
                }

                const data = await Promise.all(promises)
                let usersWithScore: UserWithScore[] = []

                for (let i = 0; i < data.length; i++) {
                    usersWithScore[i] = { ...usersInfo[i], ...data[i] }
                }

                setUsers(usersWithScore.sort((a, b) => b.score - a.score))
                setLoading(false)
                setError(null)
            } catch (error) {
                setError('Hmm, något verkar gott fel. Testa igen!')
                setLoading(false)
            }
        }
        getUserInfo()
    }, [])

    return [users, loading, error] as const
}
