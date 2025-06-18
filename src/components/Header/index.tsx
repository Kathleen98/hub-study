import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";
import { List } from "lucide-react";
import { ModeToggle } from "../theme/mode-toggle";

export const Header = () => {
  const routes: {
    label: string;
    route: string;
  }[] = [
    { label: "Dashboard", route: "/Dashboard" },
     { label: "Matérias", route: "/Issues" },
    { label: "Resumos", route: "#" },
    { label: "Cronograma", route: "#" },
    { label: "Pomodoro", route: "#" },
    { label: "Progresso", route: "#" },
  ];

  return (
    <div >
        <div className=" flex justify-between items-center  decorative p-3">
      <div className="flex gap-1.5">
        <List />
        <Separator
          decorative
          className="caret-gray-300"
          orientation="vertical"
        />
      </div>
      <nav className="m-0-auto flex gap-10">
        {routes.map((link) => (
          <Link
            key={link.label}
            className="text-sm  font-bold hover:text-violet-500  transition duration-400 "
            href={link.route}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <ModeToggle />
    </div>
    </div>
  );
};
