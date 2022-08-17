import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { addTodo } from "./Actions";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "./Actions";

const Home = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  var newEntry = {};

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState("");

  const list = useSelector((state) => state.todoReducers.list);

  console.log(list)
  const handleClose = () => {
    console.log("clicked");
    console.log(title);
    console.log(priority);
    console.log(completed);
    console.log(description);
    console.log(date);

    newEntry = {
      title: title,
      priority: priority,
      completed: completed,
      description: description,
      date: date,
    };
    setShow(false);
  };

  const handleShow = () => setShow(true);
  console.log(list);

  return (
    <>
      <div className="home">
        <button onClick={() => handleShow(true)}>Add Item</button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  Title
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Priority
                </Form.Label>
                <Col sm="10">
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option>Select</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Description
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextDate"
              >
                <Form.Label column sm="2">
                  Date
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="date"
                    min={new Date().toISOString().slice(0, 10)}
                    placeholder="Description"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Completed
                </Form.Label>
                <Col sm="10">
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setCompleted(e.target.value)}
                  >
                    <option>Select</option>
                    <option value="True">True</option>
                    <option value="False">False</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
                dispatch(addTodo(newEntry));
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {list.map((e) => {
          return (
            <div key={e.id}>
              <ListGroup  >
                <ListGroup.Item>{e.data.title}</ListGroup.Item>
                <ListGroup.Item>{e.data.priority}</ListGroup.Item>
                <ListGroup.Item>{e.data.description}</ListGroup.Item>
                <ListGroup.Item>{e.data.date}</ListGroup.Item>
                <ListGroup.Item>{e.data.completed}</ListGroup.Item>
                <button onClick={()=>dispatch(deleteItem(e.id))}> delete</button>
                <hr />
              </ListGroup>
            
            </div >
          );
        })}
      </div>
    </>
  );
};

export default Home;
