import TaskItem from "@/components/TaskItem.tsx";
import type { Task } from "@/types/Task.ts";

export interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  return tasks.map((task) => <TaskItem key={task.id} task={task} />);
}
export default TaskList;
