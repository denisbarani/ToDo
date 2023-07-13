import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import array from "./array";

function Home() {
  let history = useNavigate();

  function setA(name, description, startdata, enddata) {
    localStorage.setItem("Name", name);
    localStorage.setItem("Description", description);
    localStorage.setItem("StartData", startdata);
    localStorage.setItem("EndData", enddata);
  }

  function deleted(name) {
    var index = array
      .map(function (e) {
        return e.Name;
      })
      .indexOf(name);
    array.splice(index, 1);
    history("/");
  }

  return (
    <div style={{ margin: "10rem" }}>
      <Table striped bordered hover="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Start-data</th>
            <th>End-data</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item) => {
            return (
              <tr key={item.Name}>
                <td>{item.Name}</td>
                <td>{item.Description}</td>
                <td>{item.StartData}</td>
                <td>{item.EndData}</td>
                <td>
                  <Link to={"/edit"}>
                    <Button
                      onClick={(e) =>
                        setA(
                          item.Name,
                          item.Description,
                          item.StartData,
                          item.EndData
                        )
                      }
                      variant="info"
                    >
                      Update
                    </Button>
                  </Link>
                </td>
                <td>
                  <Button onClick={(e) => deleted(item.Name)} variant="danger">
                    Delete
                  </Button>
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
