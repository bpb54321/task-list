import { Task } from "@/types/Task.ts";
import { Button, Card, TextField } from "@radix-ui/themes";
import React, { useState } from "react";

interface TaskCreationFormProps {
  onCreateTask: (task: Task) => void;
}

function TaskCreationForm({ onCreateTask }: TaskCreationFormProps) {
  const [taskName, setTaskName] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreateTask(new Task(taskName, false));
    setTaskName("");
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-name">Task Name</label>
        <TextField.Input
          id="task-name"
          type="text"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        ></TextField.Input>
        <Button>Create Task</Button>
      </form>
    </Card>
  );
}

export default TaskCreationForm;
