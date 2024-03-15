import type { Task } from "@/types/Task.ts";

export interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  return <div>{task.name}</div>;
}

export default TaskItem;
