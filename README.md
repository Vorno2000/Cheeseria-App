# Client-Server-Cheeseria-App
 Small Cheeseria App based on the MERN Stack and includes Unit Tests and Docker implementations

TO RUN:
- Clone and open exercise folder in VS Code
- In a terminal, cd to server folder and npm start
- In a new terminal, cd to client and npm run dev

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
I chose JavaScript for this project and focused on the MERN stack to streamline things. It was a bit of a learning curve, especially 
diving into the backend with Node.js.

Given more time, I would have made this fully functional on github pages, so that local running wouldn't be required. The UI would 
be much more expanded on with elements like search and sorting functions. I would have made pages to create, edit and delete cheeses. 
Searching and sorting would be implemented into the backend for larger datasets and scalability. In this case, images were stored on 
the frontend for simplicity but a cloud service like Amazon S3 could've been used to store and retrieve these images.

Overall this project was quite simple, but getting unit tests to work properly, getting the dockerfile to run and ensuring MongoDB 
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
