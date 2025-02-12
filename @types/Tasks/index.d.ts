import { ChangeEvent } from "react";

export interface TasksProps {
  handleFormSubimit: (e: ChangeEvent<HTMLFormElement>) => void;
  handleNewTaskList: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  newTask: string;
  tasks: string[];
}
