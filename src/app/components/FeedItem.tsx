import Image from "next/image";

import FeedItem from "../interfaces/FeedItem";

import FeedItemLikeButton from "./FeedItemLikeButton";

interface FeedItemProps {
  item: FeedItem;
}

export default function FeedItem({ item }: FeedItemProps) {
  return (
    <article className="mb-6 last:mb-0">
      <div className="flex items-start gap-2">
        <Image
          className="rounded-full"
          src={item.user.avatar}
          alt={item.user.name}
          width={40}
          height={40}
        />
        <div className="mt-2">
          <h3 className="font-sans">{item.user.name}</h3>
          <p className="italic">{item.message}</p>
          <a
            href="#"
            className="font-heading text-gray-700 underline transition-colors hover:text-gray-800"
          >
            {item.book.title}, {item.book.author}
          </a>
          <div className="mt-2 flex items-center gap-1 text-sm text-gray-800">
            <FeedItemLikeButton item={item} />
          </div>
        </div>
      </div>
    </article>
  );
}
