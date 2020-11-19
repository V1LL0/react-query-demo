# REACT-QUERY-DEMO

This demo has been used in the meetup [RomaJS](https://www.youtube.com/watch?v=1UA6NuKxLM8) the 18th of November 2020,
to present [react-query](https://react-query.tanstack.com/) and some of its features.

The app loads notes (simple objects with a title and a text) and shows them.\
It is also possible to do the standard CRUD operations on them.\
This repo is composed by two folders, one for the frontend and one for the backend.

There are 5 branches:

 - **checkpoint/1** (Use of React hooks and ContextAPI for managing state)
 - **checkpoint/2** (Use of `react-query` hooks, still with manual re-fetching in `NotesList` component)
 - **checkpoint/3** (Added routing and using `onSettled` in mutations for re-fetching)
 - **checkpoint/4** (Optimistic updates example on `editNote` hook)
 - **master** (same as checkpoint/4 but with this README added)

### Backend
Developed in [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/), it uses sqlite to create 
an in-memory Database:
 - [sqlite](https://www.npmjs.com/package/sqlite) (client)
 - [sqlite3](https://www.npmjs.com/package/sqlite3) (Database Driver)
 
To run the backend, go into its folder
```
cd backend
```
and run it with `node` or `nodemon` (it will start on [http://localhost:8080](http://localhost:8080))

```
node index.js
```

### Frontend

The frontend has been created with [create-react-app](https://github.com/facebook/create-react-app).

##### Stack:
 - [React](https://reactjs.org/)
 - [craco (Create React App Configuration Override)](https://www.npmjs.com/package/@craco/craco) for overriding the CRA config
 - [ant-design (antd)](https://ant.design/) as a UI component library
 - [axios](https://github.com/axios/axios) for managing asynchronous requests
 - [history](https://www.npmjs.com/package/history) for managing the session history
 - [universal-router](https://www.kriasoft.com/universal-router/) for handling routing
 
In order to run the frontend, enter its folder:

```
cd frontend
```
and run it with:
```
npm start
```
It will start on [http://localhost:3000](http://localhost:3000)
