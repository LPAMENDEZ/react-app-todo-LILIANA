import { useState } from "react";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !correo.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    console.log("Datos enviados:", { nombre, correo });
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />

        <label>Correo:</label>
        <input value={correo} onChange={(e) => setCorreo(e.target.value)} />

        <button>Enviar</button>
      </form>
    </div>
  );
}




