import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";

import { List } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[3rem] flex justify-between decorative p-2.5">
      <div className="flex gap-1.5">
        <List />
        <Separator
          decorative
          className="caret-gray-300"
          orientation="vertical"
        />
      </div>
      <nav className="m-0-auto flex gap-3">
        <Link href={"#"}>Dashboard</Link>
        <Link href={"#"}>Matérias</Link>
        <Link href={"#"}>Resumos</Link>
        <Link href={"#"}>Cronograma</Link>
        <Link href={"#"}>Pomodoro</Link>
        <Link href={"#"}>Progresso</Link>
      </nav>
      <Header />
    </div>
  );
}
