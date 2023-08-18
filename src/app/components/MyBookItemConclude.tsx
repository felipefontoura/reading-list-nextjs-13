"use client";

import { HiMiniCheck } from "react-icons/hi2";
import classNames from "classnames";

import Book from "@interfaces/Book";

interface MyBookItemConcludeProps {
  item: Book;
}

export default function MyBookItemConclude({ item }: MyBookItemConcludeProps) {
  const handleConclude = () => {
    console.log("conclude", item.id);
  };

  return (
    <button
      className={classNames(
        "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-green md:h-6 md:w-6",
        { "bg-green": (item.progress || 0) >= 90 },
      )}
      onClick={handleConclude}
    >
      <HiMiniCheck className="h-4 w-4" />
    </button>
  );
}
