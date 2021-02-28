import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/Actions/listTasks";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleItem = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTask({ id: Math.random(), text: text, isDone: false }));
      setText("");
    } else {
      alert("Hey look it's an empty task!");
    }
  };

  return (
    <div className="Add">
      <form onSubmit={handleItem}>
        <input
          type="text"
          style={{ width: "80%" }}
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Add a to do ..."
        />
        <button style={{ width: "100px" }} onClick={handleItem}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
