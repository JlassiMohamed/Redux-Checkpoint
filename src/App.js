import React from "react";
import AddTask from "./components/AddTask/AddTask";
import ListTasks from "./components/ListTasks/ListTasks";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="Todo">
        <h1 className="Title">♣♥My To Do List♥♣</h1>
        <AddTask />
      </div>
      <ListTasks />
    </div>
  );
};

export default App;
