import Result from "@/app/components/pages/Result";
import Search from "@/app/components/pages/Search";

export default function Home() {
  return (
    <main className="m-auto max-w-[1280]">
      <Search />
      <Result />
    </main>
  );
}
