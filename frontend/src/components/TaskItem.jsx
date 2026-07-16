import { useState } from "react";

function TaskItem({ task, onToggleComplete, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  function handleSave() {
    onUpdate(task._id, { title, description });
    setIsEditing(false);
  }

  function handleCancel() {
    setTitle(task.title);
    setDescription(task.description);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <li>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button
            onClick={handleSave}
            type="button"
            class="btn btn-outline-primary"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            type="button"
            class="btn btn-outline-danger"
          >
            Cancel
          </button>
        </div>
      </li>
    );
  }

  return (
    <li class=" list-unstyled task-items-list container justify-content-md-center">
      <strong>{task.title}</strong> — {task.description}
      <br />
      Status: {task.completed ? "Complete" : "Not Complete"}
      <br />
      <div class="btn-group" role="group" aria-label="button group">
        <button
          onClick={() => onToggleComplete(task)}
          type="button"
          class="btn btn-outline-primary"
        >
          {task.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button
          onClick={() => setIsEditing(true)}
          type="button"
          class="btn btn-outline-primary"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          type="button"
          class="btn btn-outline-danger"
        >
          Delete
        </button>
      </div>
      <hr />
    </li>
  );
}

export default TaskItem;
