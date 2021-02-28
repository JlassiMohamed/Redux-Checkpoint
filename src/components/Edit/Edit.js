import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../redux/Actions/listTasks";
import { Button, Modal } from "react-bootstrap";

const Edit = ({ task }) => {
  const [show, setShow] = useState(false);

  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = () => {
    if (newText) {
      dispatch(editTask(task.id, newText));
    } else {
      alert("can't add an enpty task");
    };
    handleClose();
  };
  return (
    <div>
      <Button variant="outline-primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change your task:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Enter your task..."
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Edit;
