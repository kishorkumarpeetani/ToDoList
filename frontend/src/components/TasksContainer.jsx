import "../styles/TasksContainer.css";
import { Tasks } from "./Tasks.jsx";

export function TasksContainer({
  tasks,
  setTasks,
  tasksLoading,
  onEditTask,
  showNotification,
}) {
  return (
    <div className="tasksContainer" id="tasksContainer">
      {tasksLoading ? (
        <div className="noTasks">Loading tasks...</div>
      ) : tasks.length == 0 ? (
        <div className="noTasks" id="noTasks">
          No Tasks Yet..
        </div>
      ) : (
        <Tasks
          tasks={tasks}
          setTasks={setTasks}
          onEditTask={onEditTask}
          showNotification={showNotification}
        />
      )}
    </div>
  );
}
