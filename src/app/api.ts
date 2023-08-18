"use server";

import Book from "@interfaces/Book";
import FeedItem from "@interfaces/FeedItem";

export async function fetchFeed(): Promise<FeedItem[]> {
  const response = await fetch("http://localhost:3000/api/feed", {
    cache: "no-cache",
    next: {
      tags: ["feed"],
    },
  });
  const data = await response.json();
  return data as FeedItem[];
}

export async function fetchMyBooks() {
  const response = await fetch("http://localhost:3000/api/my-books", {
    cache: "no-cache",
    next: {
      tags: ["my-books"],
    },
  });
  const data = await response.json();
  return data as Book[];
}
