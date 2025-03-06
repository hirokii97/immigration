import Result from "@/app/components/pages/Result";
import Search from "@/app/components/pages/Search";
import Margin from "@/app/components/ui/Margin";

export default function Home() {
  return (
    <main className="p-6 m-auto">
      <Search />
      <Result />
    </main>
  );
}
