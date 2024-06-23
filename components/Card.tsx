import React from "react";
import { IoMdStar } from "react-icons/io";

interface CardInfo {
  user: string;
  review: string;
  rating: number;
}

const Card = ({ user, review, rating }: CardInfo) => {
  return (
    <div className="max-w-sm p-4 mr-6 mt-5 border border-gray-200 rounded-lg shadow-lg bg-white min-h-60 min-w-[320px]">
      <p className="text-lg font-bold text-gray-800 mb-2">{user}</p>
      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: 5 }, (_, i) => (
          <IoMdStar
            key={i}
            size={24}
            className={`text-white ${
              rating > i ? "bg-green-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 leading-6 font-semibold">{review}</p>
    </div>
  );
};

export default Card;
