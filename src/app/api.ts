"use server";

import FeedItem from "@interfaces/FeedItem";

export async function fetchFeed(): Promise<FeedItem[]> {
  const response = await fetch(
    "https://64de84ea825d19d9bfb2abea.mockapi.io/Feed",
    {
      cache: "no-cache",
      next: {
        tags: ["feed"],
      },
    },
  );
  const data = await response.json();
  return data as FeedItem[];
}
