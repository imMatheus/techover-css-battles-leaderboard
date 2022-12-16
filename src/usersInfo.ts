export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  batch?: number;
}

export interface UserWithScore extends User {
  rank: number;
  playedCount: number;
  totalPlayers: number;
  score: number;
}

export const usersInfo: User[] = [
  {
    id: "dOGOTo18VwWjDzXjUui1sHB8wq03",
    username: "matheus",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2FdOGOTo18VwWjDzXjUui1sHB8wq03%2Favatar_dOGOTo18VwWjDzXjUui1sHB8wq03.jpeg?alt=media",
    displayName: "Matheus Mendes",
  },
  {
    id: "ck7im5FvsFc2infb8j5nZlonRSh2",
    username: "xaraquent",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fck7im5FvsFc2infb8j5nZlonRSh2%2Favatar_ck7im5FvsFc2infb8j5nZlonRSh2.png?alt=media",
    displayName: "Simon",
    batch: 3,
  },
  {
    id: "AZlQ5H01qCV80XFVKfD393FYFQk1",
    displayName: "Filip Windahl",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2FAZlQ5H01qCV80XFVKfD393FYFQk1%2Favatar_AZlQ5H01qCV80XFVKfD393FYFQk1.jpeg?alt=media",
    username: "gallianoz",
    batch: 2,
  },
];
