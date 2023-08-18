import Book from "./Book";

export default interface FeedItem {
  id: string;
  message: string;
  user: {
    name: string;
    avatar: string;
  };
  book: Book;
}
