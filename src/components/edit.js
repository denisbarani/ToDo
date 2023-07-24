import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [categories, setcategories] = useState("");
  const [startdata, setstartdata] = useState("");
  const [enddata, setenddata] = useState("");
  const navigate = useNavigate();
  const { empid } = useParams();

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setid(resp.id);
        setname(resp.name);
        setdescription(resp.description);
        setcategories(resp.categories);
        setstartdata(resp.startdata);
        setenddata(resp.enddata);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { id, name, description, categories, startdata, enddata };

    fetch("http://localhost:8000/employee/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully");
        navigate("/");
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
        onSubmit={handlesubmit}
      >
        <Form.Group className="mb-3">
          <Form.Control value={id} disabled="disabled" type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={categories}
            onChange={(e) => setcategories(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={startdata}
            onChange={(e) => setstartdata(e.target.value)}
            type="date"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={enddata}
            onChange={(e) => setenddata(e.target.value)}
            type="date"
          />
        </Form.Group>
        <Button className="gap-2 sm" variant="primary" type="submit">
          Update
        </Button>
        <Link className="d-grid gap-2" to="/">
          <Button variant="warning" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}
export default Edit;
