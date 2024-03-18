import CompletionStatus from "@/components/CompletionStatus.tsx";
import type { Task } from "@/types/Task.ts";
import { TrashIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, Checkbox, Flex, IconButton } from "@radix-ui/themes";

export interface TaskItemProps {
  task: Task;
  onDelete: (taskId: string) => void;
  onCompletionStatusChange: (taskId: string) => void;
}

function TaskItem({ task, onDelete, onCompletionStatusChange }: TaskItemProps) {
  return (
    <Flex asChild={true} gap="2" direction="row" align="center" mb="2">
      <li>
        <Checkbox
          onClick={() => onCompletionStatusChange(task.id)}
          checked={task.isCompleted}
        />
        <span>{task.name}</span>
        <CompletionStatus isCompleted={task.isCompleted} />
        <IconButton onClick={() => onDelete(task.id)} ml="auto">
          <AccessibleIcon label={"Delete"}>
            <TrashIcon />
          </AccessibleIcon>
        </IconButton>
      </li>
    </Flex>
  );
}

export default TaskItem;
