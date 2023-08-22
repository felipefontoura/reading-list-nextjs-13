import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="container mx-auto mb-24 p-4 md:mb-0 md:w-screen md:pl-24">
      <h1>Dashboard</h1>
      <Link href="/">Voltar</Link>
    </main>
  );
}
