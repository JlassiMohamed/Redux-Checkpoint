import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ButtonGroup, Button } from "react-bootstrap";
import Task from "../Task/Task";
import "./ListTasks.css";

const ListTasks = () => {
  const [status, setStatus] = useState("ALL");
  const listTasks = useSelector((state) => state.task.listTasks);
  return (
    <div style={{ margin: "0 2%" }}>
      <ButtonGroup aria-label="Basic example" style={{ padding: "20px 0px" }}>
        <Button variant="secondary" onClick={() => setStatus("ALL")}>
          ALL
        </Button>
        <Button variant="secondary" onClick={() => setStatus("Undone")}>
          Undone
        </Button>
        <Button variant="secondary" onClick={() => setStatus("Done")}>
          Done
        </Button>
      </ButtonGroup>

      {status == "Undone"
        ? listTasks
            .filter((task) => task.isDone == false)
            .map((task) => <Task task={task} key={task.id} />)
        : status == "Done"
        ? listTasks
            .filter((task) => task.isDone == true)
            .map((task) => <Task task={task} key={task.id} />)
        : listTasks.map((el) => <Task task={el} key={el.id} />)}
    </div>
  );
};

export default ListTasks;
