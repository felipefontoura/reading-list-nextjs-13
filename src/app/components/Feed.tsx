import Image from "next/image";
import { HiHeart } from "react-icons/hi2";

import FeedItem from "../interfaces/FeedItem";

import { fetchFeed } from "../api";

interface FeedItemProps {
  item: FeedItem;
}

function FeedItem({ item }: FeedItemProps) {
  const handleLike = () => {
    console.log("like");
  };

  return (
    <article className="mb-6">
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
            <button>
              <HiHeart className="h-6 w-6 text-red" />
            </button>
            (10)
          </div>
        </div>
      </div>
    </article>
  );
}

export default async function Feed() {
  const feedItems = await fetchFeed();

  return (
    <section className="mb-8">
      <h2 className="mb-6">Feed</h2>
      <div className="relative flex">
        <div className="z-10 ml-1">
          {feedItems.map((item) => (
            <FeedItem key={item.id} item={item} />
          ))}
        </div>
        <div className="absolute bottom-20 left-5 top-2 w-1 border-r border-r-gray-500"></div>
      </div>
    </section>
  );
}
