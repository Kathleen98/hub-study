import { ChangeEvent } from "react";

export interface TasksProps {
  tasks: string[];
  newTask: string;
  handleNewTaskList: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleFormSubimit: (e: ChangeEvent<HTMLFormElement>) => void;
  handleWithTaskDelete: (taskForDelete: string) => void;
}
