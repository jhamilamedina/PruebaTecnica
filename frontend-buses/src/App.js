import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusTable from "./components/BusTable";
import BusDetail from "./components/BusDetail";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Listado de Buses</h1>
        <Routes>
          <Route path="/" element={<BusTable />} />
          <Route path="/bus/:id" element={<BusDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
