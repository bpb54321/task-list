import { CompletionStatus } from "@/types/CompletionStatus.ts";
import { Task } from "@/types/Task.ts";
import React, { useState } from "react";

interface TaskCreationFormProps {
  onCreateTask: (task: Task) => void;
}

function TaskCreationForm({ onCreateTask }: TaskCreationFormProps) {
  const [taskName, setTaskName] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreateTask(new Task(taskName, CompletionStatus.Uncompleted));
    setTaskName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-name">Task Name</label>
      <input
        id="task-name"
        type="text"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default TaskCreationForm;
