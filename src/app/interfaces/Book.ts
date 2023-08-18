export default interface Book {
  id: string;
  title: string;
  author: string;
  url: string;
  cover?: string;
  progress?: number;
}
