import CompletionStatus from "@/components/CompletionStatus.tsx";
import type { Task } from "@/types/Task.ts";
import classes from "@/components/TaskItem.module.css";
import { Checkbox } from "@radix-ui/themes";

export interface TaskItemProps {
  task: Task;
  onDelete: (taskId: string) => void;
  onCompletionStatusChange: (taskId: string) => void;
}

function TaskItem({ task, onDelete, onCompletionStatusChange }: TaskItemProps) {
  return (
    <li className={classes.taskItem}>
      <Checkbox
        onClick={() => onCompletionStatusChange(task.id)}
        checked={task.isCompleted}
      />
      <span>{task.name}</span>|
      <CompletionStatus isCompleted={task.isCompleted} />
      <button type="button" onClick={() => onDelete(task.id)}>
        Delete task
      </button>
    </li>
  );
}

export default TaskItem;
