import TaskItem from "@/components/TaskItem.tsx";
import type { Task } from "@/types/Task.ts";

export interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (taskId: string) => void;
  onTaskCompletionStatusChange: (taskId: string) => void;
}

function TaskList({
  tasks,
  onDeleteTask,
  onTaskCompletionStatusChange,
}: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onCompletionStatusChange={onTaskCompletionStatusChange}
        />
      ))}
    </ul>
  );
}
export default TaskList;
