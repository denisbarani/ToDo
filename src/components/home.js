import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link } from "react-router-dom";

function Home() {
 
  const [isNewUserAdded, setIsNewUserAdded] = useState(false);

  // Function to mark an item as done
  const markAsDone = (name) => {
    if (!isNewUserAdded) {
      const index = array.findIndex((item) => item.Name === name);
      if (index !== -1) {
        array[index].isDone = true;
      }
    }
  };

  // Function to handle when a new user is added
  const handleNewUserAdded = () => {
    setIsNewUserAdded(true);
  };

  return (
    <div style={{ margin: "10rem" }}>
      <Table striped bordered hover="sm">
        <thead>
          <tr>
            <th>Item</th>
            <th>Name</th>
            <th>Description</th>
            <th>Start-data</th>
            <th>End-data</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item) => {
            return (
              <tr key={item.Name}>
                <td>{item.Item}</td>
                <td>{item.Name}</td>
                <td>{item.Description}</td>
                <td>{item.StartData}</td>
                <td>{item.EndData}</td>
                <td>
                  {/* Render a button or checkbox to mark an item as done */}
                  {item.isDone ? (
                    <Button variant="success" disabled>
                      Done
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => {
                        markAsDone(item.Name);
                        handleNewUserAdded();
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
      <Link className="gap-2" to="/create">
        <Button size="lg">Create</Button>
      </Link>
    </div>
  );
}

export default Home;
