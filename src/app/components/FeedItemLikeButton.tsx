"use client";

import { HiOutlineHeart } from "react-icons/hi2";

import FeedItem from "@interfaces/FeedItem";

interface FeedItemLikeButtonProps {
  item: FeedItem;
}

export default function FeedItemLikeButton({ item }: FeedItemLikeButtonProps) {
  const handleLike = () => {
    console.log("like", item.id);
  };

  return (
    <>
      <button onClick={handleLike}>
        <HiOutlineHeart className="h-6 w-6 text-red hover:fill-red active:fill-red" />
      </button>
      (10)
    </>
  );
}
