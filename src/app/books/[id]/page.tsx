import Link from "next/link";

export default function Book({ params: { id } }: { params: { id: string } }) {
  return (
    <main className="container mx-auto p-4">
      <h2>Book details</h2>
      <p>ID: {id}</p>
      <Link href="/" className="underline">
        Voltar
      </Link>
    </main>
  );
}
