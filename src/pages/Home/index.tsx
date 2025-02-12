import { ChangeEvent, useState } from "react";
import Tasks from "../../components/Tasks";

const Home = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleFormSubimit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const handleNewTaskList = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTask(e.target.value);
  };

  const handleWithTaskDelete = (taskForDelete: string) => {
    const filterWithDeletedTask = tasks.filter(
      (task: string) => task !== taskForDelete
    );
    setTasks(filterWithDeletedTask);
  };

  return (
    <Tasks
      tasks={tasks}
      newTask={newTask}
      handleNewTaskList={handleNewTaskList}
      handleFormSubimit={handleFormSubimit}
      handleWithTaskDelete={handleWithTaskDelete}
    />
  );
};

export default Home;
