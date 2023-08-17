import NavBar from "./components/NavBar";
import Hero from "@components/Hero";
import MyReadings from "@components/MyReadings";
import Goals from "@components/Goals";
import Connections from "@components/Connections";

export default function Home() {
  return (
    <>
      <main className="container mx-auto p-4 md:pl-24">
        <Hero />
        <MyReadings />
        <Goals />
        <Connections />
      </main>
      <NavBar />
    </>
  );
}
