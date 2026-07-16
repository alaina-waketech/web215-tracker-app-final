import { useState } from "react";

function TaskForm({ onCreateTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description) return;

    onCreateTask({ title, description });
    setTitle("");
    setDescription("");
  }

  return (
    <form class="mb-3" onSubmit={handleSubmit}>
      <div class="col-auto">
        <label for="task-title" class="form-label m-2">
          Task Title
        </label>
        <input
          type="text"
          placeholder="Task title"
          id="task-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />{" "}
        <label for="task-description" class="form-label m-2">
          Task Title
        </label>
        <input
          type="text"
          id="task-description"
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" class="m-3 btn btn-outline-primary">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
