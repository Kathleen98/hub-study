import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@radix-ui/react-separator";

const Summaries = () => {
  return (
    <div className="">
      <Header />
      <Separator />

      <div className="">
        <form className="flex flex-col gap-3 w-[40vw] mx-auto">
          <p className="text-center">Adicione seu resumo</p>
          <Input placeholder="Matéria" />
          <Input placeholder="Título" />
          <Textarea placeholder="Resumo" />
          <Button className="w-[30%] mx-auto hover:cursor-pointer">
            Adicionar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Summaries;
