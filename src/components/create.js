import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
// import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [startdata, setstartdata] = useState("");
  const [enddata, setenddata] = useState("");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // const ids = uuid()
    // const uni = ids.slice(0, 8)

    const a = name,
      b = description,
      c = startdata,
      d = enddata;
    array.push({ Name: a, Description: b, StartData: c, EndData: d });
    history("/");
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controllId="fromBasicName">
          <Form.Control
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controllId="fromBasicDescription">
          <Form.Control
            onChange={(e) => setdescription(e.target.value)}
            type="text"
            placeholder="Enter Description"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controllId="fromBasicStart-Data">
          <Form.Control
            onChange={(e) => setstartdata(e.target.value)}
            type="text"
            placeholder="Enter Start-Data"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controllId="fromBasicStart-Data">
          <Form.Control
            onChange={(e) => setenddata(e.target.value)}
            type="text"
            placeholder="Enter End-Data"
            required
          />
        </Form.Group>
        <Button
          onClick={(e) => handleSubmit(e)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
        <Link className="d-grid gap-2" to="/">
          <Button variant="info" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Create;
