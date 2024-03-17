import CompletionStatus from "@/components/CompletionStatus.tsx";
import { CompletionStatus as CompletionStatusEnum } from "@/types/CompletionStatus.ts";
import type { Task } from "@/types/Task.ts";

export interface TaskItemProps {
  task: Task;
  onDelete: (taskId: string) => void;
  onCompletionStatusChange: (taskId: string) => void;
}

function TaskItem({ task, onDelete, onCompletionStatusChange }: TaskItemProps) {
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => onCompletionStatusChange(task.id)}
        // TODO: Refactor to task.isCompleted() method.
        checked={task.completionStatus === CompletionStatusEnum.Completed}
      />
      <span>{task.name}</span>|
      <CompletionStatus completionStatus={task.completionStatus} />
      <button type="button" onClick={() => onDelete(task.id)}>
        Delete task
      </button>
    </div>
  );
}

export default TaskItem;
