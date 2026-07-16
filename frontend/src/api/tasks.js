import { API_URL } from "./config";

export async function getTasks(token) {
  const response = await fetch(`${API_URL}/api/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Unable to retrieve tasks.");
  }

  return response.json();
}

export async function createTask(token, { title, description }) {
  const response = await fetch(`${API_URL}/api/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, description }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to create task.");
  }

  return data;
}

export async function updateTask(token, id, updates) {
  const response = await fetch(`${API_URL}/api/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to update task.");
  }

  return data;
}

export async function deleteTask(token, id) {
  const response = await fetch(`${API_URL}/api/tasks/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to delete task.");
  }

  return data;
}
