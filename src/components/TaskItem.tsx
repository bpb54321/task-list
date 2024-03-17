import CompletionStatus from "@/components/CompletionStatus.tsx";
import type { Task } from "@/types/Task.ts";

export interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  return (
    <div>
      <span>{task.name}</span>|
      <CompletionStatus completionStatus={task.completionStatus} />
    </div>
  );
}

export default TaskItem;
