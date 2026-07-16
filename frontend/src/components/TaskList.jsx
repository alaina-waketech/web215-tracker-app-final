import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api/tasks";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

function TaskList({ token }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTasks() {
      try {
        const data = await getTasks(token);
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, [token]);

  async function handleCreateTask(newTask) {
    setError("");
    try {
      const created = await createTask(token, newTask);
      setTasks((prev) => [...prev, created]);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleToggleComplete(task) {
    setError("");
    try {
      const updated = await updateTask(token, task._id, {
        completed: !task.completed,
      });
      setTasks((prev) =>
        prev.map((t) => (t._id === updated._id ? updated : t)),
      );
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDeleteTask(id) {
    setError("");
    try {
      await deleteTask(token, id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleUpdateTask(id, updates) {
    setError("");
    try {
      const updated = await updateTask(token, id, updates);
      setTasks((prev) =>
        prev.map((t) => (t._id === updated._id ? updated : t)),
      );
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section>
      <h2>Your Tasks</h2>

      <TaskForm onCreateTask={handleCreateTask} />
      {tasks.length === 0 ? (
        <p>You don't have any tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTask}
              onUpdate={handleUpdateTask}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskList;
