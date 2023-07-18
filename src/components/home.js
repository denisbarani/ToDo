import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link } from "react-router-dom";

function Home() {
 
  const [isNewUserAdded, setIsNewUserAdded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Web Developer", "Backend Developer", "Full-stack Developer"]; // Add more categories as needed


  // Function to mark an item as done
  const markAsDone = (name) => {
    if (!isNewUserAdded) {
      const index = array.findIndex((item) => item.Name === name);
      if (index !== 1) {
        array[index].isDone = true;
      }
    }
  };
  const filteredArray = array.filter((item) => {
    if (selectedCategory === "All") return true; // Show all items when "All" is selected
    return item.Description === selectedCategory;
  });

  // Function to handle when a new user is added
  const handleNewUserAdded = () => {
    setIsNewUserAdded(true);
  };

  return (
    <div style={{ margin: "10rem" }}>
           <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="category-select">Select Category:</label>
        <select
          id="category-select"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          {/* Add more options based on your actual categories */}
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
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
          {filteredArray.map((item) => {
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
