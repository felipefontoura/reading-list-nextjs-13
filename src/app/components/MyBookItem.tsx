import Image from "next/image";

import MyBookItemConclude from "@components/MyBookItemConclude";

import Book from "@interfaces/Book";

interface MyBookItemProps {
  item: Book;
}

export default function MyBookItem({ item }: MyBookItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-20">
        {item.cover && (
          <Image src={item.cover} alt={item.title} width={80} height={120} />
        )}
      </div>
      <div>
        <h3>{item.title}</h3>
        <p className="mb-2 text-sm">{item.author}</p>
        <MyBookItemConclude item={item} />
      </div>
    </div>
  );
}
