import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { deleteTask, doneTask } from "../../redux/Actions/listTasks";
import Edit from "../Edit/Edit";
import "./Task.css";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className="task">
      <span className={task.isDone ? "done" : null} style={{paddingRight:"20px"}}>{task.text}</span>
      <div className="Btn" >
        <Edit task={task} />
        <Button
          variant="outline-danger"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          delete
        </Button>
        <span onClick={() => dispatch(doneTask(task.id))}>
          {task.isDone ? (
            <Button variant="outline-warning">Undone</Button>
          ) : (
            <Button variant="outline-success">Done</Button>
          )}
        </span>
      </div>
    </div>
  );
};

export default Task;
