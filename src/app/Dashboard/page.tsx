import { Header } from "@/components/Header";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CiCircleCheck } from "react-icons/ci";

const Dashboard = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="flex flex-col gap-14 w-[90vw] m-auto mt-4">
        <p className="font-bold text-2xl">Dashboard</p>
        <div className="flex justify-between">
          <Card className="w-[300px] p-4">
            <CardTitle>Matérias</CardTitle>
            <CardDescription className="text-lg font-bold">5</CardDescription>
          </Card>
          <Card className="w-[300px] p-4">
            <CardTitle>Resumos</CardTitle>
            <CardDescription className="text-lg font-bold">5</CardDescription>
          </Card>
          <Card className="w-[300px] p-4">
            <CardTitle>Horas estudando</CardTitle>
            <CardDescription className="text-lg font-bold">5</CardDescription>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-bold text-xl">Dias consecutivos</p>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-bold">30 dias sem parar</p>
            <Progress value={30} />
            <p className="text-xs dark:text-gray-400">
              Continue estudando para aumentar seu progresso
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-bold text-xl">Atividades recentes</p>
          <div className="flex gap-3 items-start">
            <CiCircleCheck />
            <div className="">
              <p className="text-sm font-bold">Adicionou a máteria JavaScript</p>
              <p className="text-xs dark:text-gray-400">Há 2 horas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
