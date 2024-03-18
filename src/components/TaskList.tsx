import TaskItem from "@/components/TaskItem.tsx";
import type { Task } from "@/types/Task.ts";
import classes from "@/components/TaskList.module.css";

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
    <ul className={classes.taskList}>
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
