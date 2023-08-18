export default function Book({ params: { id } }: { params: { id: string } }) {
  return <h2>Book: {id}</h2>;
}
