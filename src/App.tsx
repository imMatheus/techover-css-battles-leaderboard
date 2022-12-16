import { useLeaderboard } from './useLeaderboard'
import classNames from 'classnames'

function App() {
    const [users, loading, error] = useLeaderboard()
    console.log(users)

    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className='text-gray-300 mb-8 text-center text-5xl font-bold'>
                Techover CSS Battles Leaderboard
            </h1>

            {loading ? (
                <div className='mx-auto w-6 h-6 border-4 rounded-full border-gray-600 border-t-indigo-700 animate-spin'></div>
            ) : (
                <div className='gap-4 grid md:grid-cols-2 lg:grid-cols-3'>
                    {users?.map((user, i) => {
                        return (
                            <div
                                className={classNames(
                                    'p-4 flex gap-2 bg-black rounded-lg',
                                    { 'bg-[#424022]': i === 0 },
                                    { 'bg-[#bfbfbf26]': i === 1 },
                                    { 'bg-[#382e25]': i === 2 }
                                )}
                                key={user.id}
                            >
                                <div
                                    className={classNames(
                                        'flex-shrink-0 text-white font-black text-xl italic mr-1 mt-1',
                                        { 'text-[#ffd700]': i === 0 },
                                        { 'text-[#c0c0c0]': i === 1 },
                                        { 'text-[#cd7f33]': i === 2 }
                                    )}
                                >
                                    #{i + 1}
                                </div>
                                <div className='flex-shrink-0'>
                                    <img
                                        src={user.avatar}
                                        alt=''
                                        className='w-10 h-10 rounded-full md:w-12 md:h-12'
                                    />
                                </div>
                                <div>
                                    <h2 className='text-white font-bold text-xl'>
                                        {user.displayName}
                                    </h2>
                                    <p className='text-gray-300 text-sm'>
                                        {user.score.toFixed(2)} -{' '}
                                        {`(${user.playedCount} targets)`}
                                    </p>
                                    <p className='text-gray-300 text-xs'>
                                        {`Global rank: ${user.rank || '-'}/${
                                            user.totalPlayers
                                        }`}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default App
