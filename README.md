Project title.

Task Tracker App

---

Short project description.

This is an api project that allows users to register accounts, login to their accounts, and update/add/delete new tasks. It is split into two parts. The backend is built with Express, Node.js, and MongoDB to handle user requests. The frontend is built with React to create a reactive webpage for users to interact with.

---

Main features.

This API includes:

-login and registration

-password hashing

-token authentication

-uses MongoDB as the database host

-logout function

-fully working CRUD requests

---

Technologies used.

Backend:

-node.js

-Express

-MongoDB

-bcryptjs

-jsonwebtoken

-dotenv

Frontend:

-React

-Bootstrap

-Vite

---

Local setup instructions:

Backend:

-In your terminal, type cd backend

-use npm install

-create an .env file

-type npm run dev

-that should provide you with a local host link

Frontend:

-In your terminal, type cd frontend

-use npm install

-type npm run dev

-that should provide you with a local host link

-you need to load the backend first in a separate terminal for the frontend to work. They must be running at the same time.

---

Required environment variables without private values.

Inside your .env file you should have the following lines but updated with the data for your specific project:

PORT=your_port_number

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

---

API route overview.

-/api/health -> confirms api is running -> method: get

- /api/auth/register -> registers a new user -> method: post

- /api/auth/login -> logins in user and returns token -> method: post

- /api/tasks -> get all tasks for logged-in user -> method: get

- /api/tasks -> create a new task -> method: post

- /api/tasks/:id -> update a task -> method: put

- /api/tasks/:id -> delete a task -> method: delete

---

Any known issues or future improvements.

-Data for the project is stored in a personal database and cannot be accessed by other users without the database information.

-Layout and design of the project is very simple and I would like to improve it in the future.
