import type { Task } from "@/types/Task.ts";
import { useState } from "react";

export function useTasks(initialTasks: Task[]) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const handleCreateTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };
  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const handleTaskCompletionStatusChange = (taskId: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? task.copyWithToggledStatus() : task.copy(),
    );
    setTasks(updatedTasks);
  };
  return {
    tasks,
    handleCreateTask,
    handleDeleteTask,
    handleTaskCompletionStatusChange,
  };
}
