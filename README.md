# Client-Server-Cheeseria-App
 Small Cheeseria App based on the MERN Stack and includes Unit Tests and Docker implementations

PREREQUISITES:
- Node Package Manager (download and install here: https://nodejs.org/en/download/prebuilt-installer)

TO RUN:
- Clone and open Cheesera-App-main folder in VS Code
- In a terminal, cd to server folder ("cd server") and "npm start" (Will start server on port 3001)
- In a new terminal, cd to client folder ("cd client") and "npm install" to install the dependencies
- "npm run dev" to start the client on port 5173
- go to URL: http://localhost:5173/ to see the app

- if there's no cheeses, either the server couldn't connect to MongoDB or there's an issue with the API 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
I chose JavaScript for this project and focused on the MERN stack to streamline things. I learnt a lot doing this exercise, 
specifically with Node JS, Express, MongoDB, the testing with JEST and TestingLibrary, and the Docker builds.

Given more time, I would have made this fully functional on github pages, so that local running wouldn't be required. The UI would 
be much more expanded on with elements like search and sorting functions. I would have made pages to create, edit and delete cheeses. 
Searching and sorting would be implemented into the backend for larger datasets and scalability. In this case, images were stored on 
the frontend for simplicity but a cloud service like Amazon S3 could've been used to store and retrieve these images.

Overall this project was quite simple, but getting unit tests to work properly, getting the dockerfiles to run and ensuring MongoDB 
was functional took far too much time. It wouldn't take me even half the time to do all of this again with the experience I've picked 
up solely from this exercise.

Frontend
-ReactJs
-Axios
-React Router
-CSS (modules) - done by ChatGPT
-Jest & SuperTest (for apis)
-Dockerfile

Backend
-NodeJs
-Express 
-MongoDB /w mongoose
-cors 
-nodemon
-dotenv
-Dockerfile

Testing
-Jest
-Vitest
-TestingLibrary
