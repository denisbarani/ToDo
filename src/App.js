import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/create";
import Edit from "./components/edit";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee/create" element={<Create />} />
          <Route path="/employee/edit/:empid" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
