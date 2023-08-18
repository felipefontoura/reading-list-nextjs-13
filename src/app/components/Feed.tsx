import FeedItem from "@components/FeedItem";

import { fetchFeed } from "@/app/api";

export default async function Feed() {
  const feedItems = await fetchFeed();

  return (
    <section>
      <h2 className="mb-6">Feed</h2>
      <div className="relative flex">
        <div className="z-10 ml-1">
          {feedItems.map((item) => (
            <FeedItem key={item.id} item={item} />
          ))}
        </div>
        <div className="absolute bottom-0 left-5 top-2 w-1 border-r border-r-gray-500"></div>
      </div>
    </section>
  );
}
