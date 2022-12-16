import React from "react";
import classNames from "classnames";
import type { UserWithScore } from "../usersInfo";

interface CardProps {
  user: UserWithScore;
  i: number;
}

const Card: React.FC<CardProps> = ({ user, i }) => {
  return (
    <div
      className={classNames(
        "flex gap-2 rounded-lg p-4",
        { "bg-[#424022]": i === 0 },
        { "bg-[#bfbfbf26]": i === 1 },
        { "bg-[#382e25]": i === 2 },
        { "bg-[#020202]": i > 2 }
      )}
      key={user.id}
    >
      <div
        className={classNames(
          "mr-1 mt-1 flex-shrink-0 text-xl font-black italic text-white",
          { "text-[#ffd700]": i === 0 },
          { "text-[#c0c0c0]": i === 1 },
          { "text-[#cd7f33]": i === 2 }
        )}
      >
        #{i + 1}
      </div>
      <div className="flex-shrink-0">
        <img
          src={user.avatar}
          alt=""
          className="h-10 w-10 rounded-full md:h-12 md:w-12"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold text-white">{user.displayName}</h2>
        <p className="text-sm text-gray-400">
          {user.score.toFixed(2)} - {`(${user.playedCount} targets)`}
        </p>
        <p className="text-xs text-gray-400">
          {`Global rank: ${user.rank || "-"}/${user.totalPlayers}`}
        </p>
      </div>
    </div>
  );
};

export default Card;
