export interface User {
    id: string
    username?: string
    displayName: string
    avatar: string
    batch?: number
}

export interface UserWithScore extends User {
    rank: number
    playedCount: number
    totalPlayers: number
    score: number
}

export const usersInfo: User[] = [
    {
        id: 'dOGOTo18VwWjDzXjUui1sHB8wq03',
        username: 'matheus',
        avatar: 'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2FdOGOTo18VwWjDzXjUui1sHB8wq03%2Favatar_dOGOTo18VwWjDzXjUui1sHB8wq03.jpeg?alt=media',
        displayName: 'Matheus Mendes',
    },
    {
        id: 'ck7im5FvsFc2infb8j5nZlonRSh2',
        username: 'xaraquent',
        avatar: 'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fck7im5FvsFc2infb8j5nZlonRSh2%2Favatar_ck7im5FvsFc2infb8j5nZlonRSh2.png?alt=media',
        displayName: 'Simon',
        batch: 3,
    },
    {
        id: 'AZlQ5H01qCV80XFVKfD393FYFQk1',
        displayName: 'Filip Windahl',
        avatar: 'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2FAZlQ5H01qCV80XFVKfD393FYFQk1%2Favatar_AZlQ5H01qCV80XFVKfD393FYFQk1.jpeg?alt=media',
        username: 'gallianoz',
        batch: 2,
    },
    {
        id: '2atLl1wSDJgtu4EUvfR6giuRrUG3',
        displayName: 'William Eliasson',
        batch: 3,
        avatar: 'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2F2atLl1wSDJgtu4EUvfR6giuRrUG3%2Favatar_2atLl1wSDJgtu4EUvfR6giuRrUG3.jpeg?alt=media',
    },
    {
        id: 'I0CseT2GXRfCDHYERlxbjAaQuEv2',
        avatar: 'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2FI0CseT2GXRfCDHYERlxbjAaQuEv2%2Favatar_I0CseT2GXRfCDHYERlxbjAaQuEv2.jpeg?alt=media',
        username: 'mauel',
        displayName: 'Emanuel',
        batch: 1,
    },
    {
        id: 'FTHTL9eCYtY511vgCWrTg6YqmI83',
        avatar: 'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2FFTHTL9eCYtY511vgCWrTg6YqmI83%2Favatar_FTHTL9eCYtY511vgCWrTg6YqmI83.jpeg?alt=media',
        username: 'ulvesten',
        displayName: 'Ulvesten',
        batch: 2,
    },
    {
        id: 'vqvFXBZrIHVoSeDhfjzKaTtSzFo2',
        avatar: 'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2FvqvFXBZrIHVoSeDhfjzKaTtSzFo2%2Favatar_vqvFXBZrIHVoSeDhfjzKaTtSzFo2.png?alt=media',
        username: 'Heavenstone',
        displayName: 'Jakob',
        batch: 1,
    },
]
