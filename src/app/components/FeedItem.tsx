"use client";

import Image from "next/image";
import { HiOutlineHeart } from "react-icons/hi2";

import FeedItem from "../interfaces/FeedItem";

interface FeedItemProps {
  item: FeedItem;
}

export default function FeedItem({ item }: FeedItemProps) {
  const handleLike = () => {
    console.log("like", item.id);
  };

  return (
    <article className="mb-6 last:mb-0">
      <div className="flex items-start gap-2">
        <Image
          className="rounded-full"
          src={item.userAvatar}
          alt={item.userName}
          width={40}
          height={40}
        />
        <div className="mt-2">
          <h3 className="font-sans">{item.userName}</h3>
          <p className="italic">{item.body}</p>
          <a
            href="#"
            className="font-heading text-gray-700 underline transition-colors hover:text-gray-800"
          >
            {item.bookTitle}, {item.bookAuthor}
          </a>
          <div className="mt-2 flex items-center gap-1 text-sm text-gray-800">
            <button onClick={handleLike}>
              <HiOutlineHeart className="h-6 w-6 text-red hover:fill-red active:fill-red" />
            </button>
            (10)
          </div>
        </div>
      </div>
    </article>
  );
}
