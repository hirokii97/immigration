import Result from "@/app/components/pages/Result";
import Seach from "@/app/components/pages/Seach";
import Margin from "@/app/components/ui/Margin";

export default function Home() {
  return (
    <main className="p-6">
      <Seach />
      <Margin />
      <Result/>
    </main>
  );
}
