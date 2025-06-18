import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Issues = () => {
  return (
    <div className="">
      <Header />
      <Separator />

     <div className="flex flex-col items-center">

       <form action="" className="flex w-[30rem] gap-4 border-1 p-4 mt-4">
        <Input type="Text" placeholder="Escreva o nome da matéria" />
        <Button>Adicionar matéria</Button>
      </form>
     </div>
    </div>
  );
};

export default Issues;
