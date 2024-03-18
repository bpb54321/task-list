import CompletionStatus from "@/components/CompletionStatus.tsx";
import type { Task } from "@/types/Task.ts";
import classes from "@/components/TaskItem.module.css";
import { TrashIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, Checkbox, IconButton } from "@radix-ui/themes";

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
      <IconButton onClick={() => onDelete(task.id)}>
        <AccessibleIcon label={"Delete"}>
          <TrashIcon />
        </AccessibleIcon>
      </IconButton>
    </li>
  );
}

export default TaskItem;
