import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [empdata, empdatachange] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [markedUsers, setMarkedUsers] = useState([]);
  const navigate = useNavigate();

  const markAsDone = (id) => {
    if (!markedUsers.includes(id)) {
      setMarkedUsers([...markedUsers, id]);
    }
  };
  const filteredArray = empdata.filter((item) => {
    const isSearchMatch =
      searchTerm === "" ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.categories.toLowerCase().includes(searchTerm.toLowerCase());
    return isSearchMatch;
  });
  const LoadUpdate = (empid) => {
    navigate("/employee/edit/" + empid);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div style={{ margin: "10rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="category-select">Search:</label>
        <input
          className="md-form active-purple active-purple-2 mb-3"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search here"
        />
      </div>
      <Table striped bordered hover="sm">
        <thead>
          <tr>
            <th>Item</th>
            <th>Name</th>
            <th>Description</th>
            <th>Categories</th>
            <th>Start-data</th>
            <th>End-data</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredArray &&
            filteredArray.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.categories}</td>
                  <td>{item.startdata}</td>
                  <td>{item.enddata}</td>
                  <td>
                    <Button
                      onClick={() => {
                        LoadUpdate(item.id);
                      }}
                      className="btn btn-success"
                    >
                      Update
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => Removefunction(item.id)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </td>
                  <td>
                    {markedUsers.includes(item.id) ? (
                      <Button variant="success" disabled>
                        Done
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        onClick={() => {
                          markAsDone(item.id);
                        }}
                      >
                        Mark as Done
                      </Button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Link className="gap-2" to="employee/create">
        <Button size="lg">Create</Button>
      </Link>
    </div>
  );
}

export default Home;
