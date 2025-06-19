import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";
import { ModeToggle } from "../theme/mode-toggle";
import { FaBookReader } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const Header = () => {
  const routes: {
    label: string;
    route: string;
  }[] = [
    { label: "Dashboard", route: "/Dashboard" },
    { label: "Matérias", route: "/Issues" },
    { label: "Resumos", route: "/Summaries" },
    { label: "Cronograma", route: "#" },
    { label: "Pomodoro", route: "#" },
    { label: "Progresso", route: "#" },
  ];

  return (
    <>
      <div className="mx-8">
        <div className=" flex justify-between items-center gap-8  decorative p-3">
          <div className="flex gap-3 items-center">
            <FaBookReader />
            <p className="font-bold">Study Hub</p>
          </div>
          <nav className="mr-auto flex gap-10">
            {routes.map((link) => (
              <Link
                key={link.label}
                className="text-sm  hover:text-violet-500  transition duration-400 "
                href={link.route}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-6 items-center">
            <ModeToggle />
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <Separator className=" dark:bg-gray-800 w-full h-[.5px]" />
    </>
  );
};
