import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function BusDetail() {
  const { id } = useParams();
  const [bus, setBus] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/bus/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBus(data);
        alert(`Bus Nº${data.numero} - ${data.placa} (${data.marca.nombre})`);
      })
      .catch((err) => console.error("Error al obtener detalle del bus:", err));
  }, [id]);

  if (!bus) return <div>Cargando...</div>;

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Detalles del Bus</h2>
      <p><strong>Placa:</strong> {bus.placa}</p>
      <p><strong>Número:</strong> {bus.numero}</p>
      <p><strong>Marca:</strong> {bus.marca.nombre}</p>
      <p><strong>Características:</strong> {bus.caracteristicas}</p>
      <p><strong>Fecha de creación:</strong> {bus.fechaCreacion}</p>
      <p><strong>Estado:</strong> {bus.activo ? "Activo" : "Inactivo"}</p>
      <Link to="/">← Volver a la lista</Link>
    </div>
  );
}

export default BusDetail;
