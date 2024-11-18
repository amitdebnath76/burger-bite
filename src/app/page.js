import Image from "next/image";
import Hero from "./components/Hero";
import About from "./pages/about/page";
import Ourmenu from "./pages/ourmenu/page";
import Shop from "./pages/shop/page";

export default function Home() {
  return (
    <main >
      <h1>Burgur Hunt</h1>
      {/* <Hero></Hero> */}
      <About></About>
      <Ourmenu></Ourmenu>
      <Shop></Shop>
      
    </main>
  );
}
