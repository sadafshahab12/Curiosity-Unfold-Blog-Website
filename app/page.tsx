import Hero from "./components/Hero";
import Categories from "./components/Categories";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | Curiosity Unfold",

};
export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
    </>
  );
}
