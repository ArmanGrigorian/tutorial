import {
  Attention,
  Contents,
  Navbar,
  PartOne,
  PartThree,
  PartTwo,
} from "@/components";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1440px] p-8">
      <Contents />
      <Attention />
      <Navbar />
      <PartOne />
      <PartTwo />
      <PartThree />
    </main>
  );
}
