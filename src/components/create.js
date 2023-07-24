import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [categories, setcategories] = useState("");
  // const [startdata, setstartdata] = useState("");
  const [startdata, setstartdata] = useState(new Date().toISOString().slice(0, 10))
  const [enddata, setenddata] = useState("");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = { id, name, description, categories, startdata, enddata };

    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        history("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <Form
        className="d-grid gap-2"
        style={{ margin: "15rem" }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Control
            value={id}
            disabled="disabled"
            onChange={(e) => setid(e.target.value)}
            type="text"
            placeholder="Enter Item"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            type="text"
            placeholder="Enter Description"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={categories}
            onChange={(e) => setcategories(e.target.value)}
            type="text"
            placeholder="Enter Categories"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={startdata}
            onChange={(e) => setstartdata(e.target.value)}
            type="date"
            placeholder="Enter Start-Data"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={enddata}
            onChange={(e) => setenddata(e.target.value)}
            type="date"
            placeholder="Enter End-Data"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
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
