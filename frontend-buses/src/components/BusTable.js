import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BusTable() {
  const [buses, setBuses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/bus")
      .then((res) => {
        console.log("Respuesta cruda:", res);
        return res.json();
      })
      .then((data) => {
        console.log("Datos recibidos:", data);
        setBuses(data);
      })
      .catch((err) => console.error("Error al obtener buses:", err));
  }, []);

  const verDetalle = (id) => {
    navigate(`/bus/${id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Listado de Buses</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#eee" }}>
            <th>ID</th>
            <th>Número</th>
            <th>Placa</th>
            <th>Marca</th>
            <th>Características</th>
            <th>Fecha de Creación</th>
            <th>Estado</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => (
            <tr
              key={bus.id}
              style={{ textAlign: "center", borderBottom: "1px solid #ccc" }}
            >
              <td>{bus.id}</td>
              <td>{bus.numeroBus}</td>
              <td>{bus.placa}</td>
              <td>{bus.marca ? bus.marca.nombre : "Sin marca"}</td>
              <td>{bus.caracteristicas}</td>
              <td>
                {bus.fechaCreacion
                  ? new Date(bus.fechaCreacion).toLocaleDateString()
                  : "No registrada"}
              </td>
              <td>{bus.estado}</td>
              <td>
                <button onClick={() => verDetalle(bus.id)}>Ver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BusTable;
