import Banner from "@/components/Banner";
import BreakingNews from "@/components/BreakingNews";
import TopGenerations from "@/components/TopGenerations";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BreakingNews></BreakingNews>
      <TopGenerations></TopGenerations>
    </div>
  );
}
