import TaskItem from "@/components/TaskItem.tsx";
import type { Task } from "@/types/Task.ts";

export interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (taskId: string) => void;
}

function TaskList({ tasks, onDeleteTask }: TaskListProps) {
  return tasks.map((task) => (
    <TaskItem key={task.id} task={task} onDelete={onDeleteTask} />
  ));
}
export default TaskList;
