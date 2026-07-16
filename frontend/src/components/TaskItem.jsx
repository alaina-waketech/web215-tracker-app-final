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
      <li class="card text-center list-unstyled container justify-content-md-center">
        <div class="card-body">
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

          <div
            class="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
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
        </div>
      </li>
    );
  }

  return (
    <li class="card text-center list-unstyled container justify-content-md-center">
      <div class="card-body">
        <h5 class="card-title">
          <strong>{task.title}</strong>
        </h5>
        <p class="card-text"> {task.description} </p>
        <br />
        <p class="card-text">
          {" "}
          Status: {task.completed ? "Complete" : "Not Complete"}{" "}
        </p>

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
      </div>
    </li>
  );
}

export default TaskItem;
