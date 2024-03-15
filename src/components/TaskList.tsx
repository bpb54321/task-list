import TaskItem from "./TaskItem.tsx";
import { Task } from "../types/Task.ts";

export interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  return tasks.map((task) => <TaskItem task={task} />);
}
export default TaskList;