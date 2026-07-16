Project title.
M6 Task Tracker API

---

Short project description.
This is a backend api program that can create a new user, allow users to login in, and can update/add/delete new tasks.

---

Main features.
This API includes:
-login and registration
-password hashing
-token authentication
-uses MongoDB as the database host

---

Technologies used.
This project used:
-node.js
-Express
-MongoDB
-bcryptjs
-jsonwebtoken
-dotenv

---

Local setup instructions.
-To set this project up, you should clone the repository, use npm to install the following: express, bcryptjs, mongoose, jswonwebtoken, and dotenv.
-Make sure you have a .env file in your project and update it with the information needed.
-run the server

---

Required environment variables without private values.

Inside your .env file you should have the following lines but updated with the data for your specific project:

PORT=your_port_number
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

---

API route overview.

---

Testing notes.
This project was tested locally by using the Thunder Client extentsion on VSCode.

---

Any known issues or future improvements.
-Data for the project is stored in a personal database and cannot be accessed by other users without the database information.
-There is no frontend interface

---

Reflection questions:

What does your API do?
My API is a task list maker. You can create new users, login to your account, and then modify task data.

What part of the project was most challenging?
The most challenging part was figuring how to format the information so that it can work with mongoose. I had to do some reasearch on how things are formatted differently vs how we did it in the assignment from last week.

What error or issue did you troubleshoot?
I didn't format my mongo_uri correctly. I forgot to take the brackets off around the username section and had to troubleshoot why things weren't connecting to the database.

What do you understand better now about backend development?
I can understand how to connect a database to an api to perform tasks. I still have a lot more to try and figure out, but I can at least wrap my mind arounf the process better.

What would you improve if you had more time?
If I had more time, I would try and create a webpage to connect the API to, but I have read ahead and saw that we will be doing that later in the class.
