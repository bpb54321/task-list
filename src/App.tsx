import TaskList from "@/components/TaskList.tsx";
import { CompletionStatus } from "@/types/CompletionStatus.ts";
import type { Task } from "@/types/Task.ts";
import { useState } from "react";

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
