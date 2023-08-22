"use client";

import { HiOutlineHeart } from "react-icons/hi2";

export default function FeedItemLikeButton() {
  const handleLike = () => {
    console.debug("handleLike");
  };

  return (
    <>
      <button onClick={handleLike}>
        <HiOutlineHeart className="h-6 w-6 text-red hover:fill-red active:fill-red" />
      </button>
    </>
  );
}
