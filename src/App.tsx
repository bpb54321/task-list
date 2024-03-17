import NewTaskForm from "@/components/TaskCreationForm.tsx";
import TaskList from "@/components/TaskList.tsx";
import { CompletionStatus } from "@/types/CompletionStatus.ts";
import { Task } from "@/types/Task.ts";
import { useState } from "react";

const exampleTasks: Task[] = [
  new Task("Get dressed", CompletionStatus.Uncompleted),
  new Task("Brush teeth", CompletionStatus.Completed),
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(exampleTasks);
  const handleCreateTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };
  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <>
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
      <NewTaskForm onCreateTask={handleCreateTask} />
    </>
  );
}

export default App;
