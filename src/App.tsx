import { useState } from "react";
import TaskList from "./components/TaskList.tsx";
import { Task } from "./types/Task.ts";
import { CompletionStatus } from "./types/CompletionStatus.ts";

const exampleTasks: Task[] = [
  {
    name: "Get dressed",
    completionStatus: CompletionStatus.Uncompleted,
  },
  { name: "Brush teeth", completionStatus: CompletionStatus.Completed },
];

function App() {
  const [tasks] = useState<Task[]>(exampleTasks);
  return (
    <>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
