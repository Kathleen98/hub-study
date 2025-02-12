export interface TaskListProps {
  task: string;
  handleWithTaskDelete: (taskForDelete: string) => void;
}
