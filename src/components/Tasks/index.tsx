import {
  ButtonTaskForm,
  ContainerTask,
  FormTaskContainer,
  TextAreaTask,
} from "./styles";
import TaskList from "./TaskList/index";
import { TasksProps } from "../../../@types/Tasks/index";

const Tasks = ({
  handleFormSubimit,
  handleNewTaskList,
  newTask,
  tasks,
}: TasksProps) => {
  console.log(newTask);

  return (
    <ContainerTask>
      <FormTaskContainer onSubmit={handleFormSubimit}>
        <label htmlFor="taskTile">Tarefa</label>
        <TextAreaTask
          value={newTask}
          onChange={handleNewTaskList}
          id={"taskTile"}
        />
        <ButtonTaskForm>Adicionar</ButtonTaskForm>
      </FormTaskContainer>
      {tasks.map((task) => (
        <TaskList task={task} />
      ))}
    </ContainerTask>
  );
};

export default Tasks;
