import { Task } from "@/types/Task.ts";
import { Box, Button, Card, Heading, Text, TextField } from "@radix-ui/themes";
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
        <Heading as="h2" mb="5">
          New Task
        </Heading>
        <Box display="block" mb="5">
          <Text as="label">
            Task Name
            <TextField.Input
              id="task-name"
              type="text"
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
            ></TextField.Input>
          </Text>
        </Box>
        <Button>Create Task</Button>
      </form>
    </Card>
  );
}

export default TaskCreationForm;
