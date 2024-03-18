import NewTaskForm from "@/components/TaskCreationForm.tsx";
import TaskList from "@/components/TaskList.tsx";
import { useTasks } from "@/hooks/useTasks.ts";
import { Task } from "@/types/Task.ts";
import classes from "@/App.module.css";

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
    <div className={classes.app}>
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onTaskCompletionStatusChange={handleTaskCompletionStatusChange}
      />
      <NewTaskForm onCreateTask={handleCreateTask} />
    </div>
  );
}

export default App;
