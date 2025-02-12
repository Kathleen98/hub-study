import { Trash } from "phosphor-react";
import { ButtonTaskForm } from "../styles";
import { ListTasks, TaskListContainer } from "./styles";
import { TaskListProps } from "../../../../@types/Tasks/tasksList/index";

const TaskList = ({ task, handleWithTaskDelete }: TaskListProps) => {
  return (
    <TaskListContainer>
      <ListTasks>
        <p>{task}</p>
        <ButtonTaskForm onClick={() => handleWithTaskDelete(task)}>
          <Trash size={"1rem"} />
        </ButtonTaskForm>
      </ListTasks>
    </TaskListContainer>
  );
};

export default TaskList;
