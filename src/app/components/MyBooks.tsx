import MyBookItem from "@components/MyBookItem";

import { fetchMyBooks } from "@/app/api";

export default async function MyBooks() {
  const myBooks = await fetchMyBooks();

  return (
    <section className="mb-8">
      <h2 className="mb-6">Minhas Leituras</h2>
      <div className="grid gap-2 md:grid-cols-2">
        {myBooks.map((item) => (
          <MyBookItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
