import NewTaskForm from "@/components/TaskCreationForm.tsx";
import TaskList from "@/components/TaskList.tsx";
import { useTasks } from "@/hooks/useTasks.ts";
import { Task } from "@/types/Task.ts";

const exampleTasks: Task[] = [
  new Task("Get dressed", false),
  new Task("Brush teeth", true),
];

function App() {
  const {
    tasks,
    handleCreateTask,
    handleDeleteTask,
    handleTaskCompletionStatusChange,
  } = useTasks(exampleTasks);
  return (
    <>
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onTaskCompletionStatusChange={handleTaskCompletionStatusChange}
      />
      <NewTaskForm onCreateTask={handleCreateTask} />
    </>
  );
}

export default App;
