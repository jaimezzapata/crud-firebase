import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {collection, addDoc} from 'firebase/firestore'
import { dataBase } from "../../firebase/dataBase";

const CrearCliente = () => {
  const [cedula, setCedula] = useState();
  const [nombre, setNombre] = useState();
  const [correo, setCorreo] = useState();
  const [telefono, setTelefono] = useState();
  const navigate = useNavigate()

  const clienteCollection = collection(dataBase, 'clientes')

  const crearCliente = async (e) => {
    e.preventDefault()
    const cliente = {
      cedula, nombre, correo, telefono
    }
    await addDoc(clienteCollection, cliente)
    navigate('/clientes')
  }

  return (
    <section className="container">
      <h1 className="m-5 text-center">Nuevo cliente</h1>
      <form
      onSubmit={crearCliente}
        className="form control mt-4 d-flex w-100 flex-column"
        action=""
        method="post"
      >
        <input
          placeholder="Cedula"
          className="form-control mt-4"
          onChange={(e)=>setCedula(e.target.value)}
          type="text"
          value={cedula}
        />
        <input
          placeholder="Nombre"
          className="form-control mt-4"
          onChange={(e)=>setNombre(e.target.value)}
          type="text"
          value={nombre}
        />
        <input
          placeholder="Correo"
          className="form-control mt-4"
          onChange={(e)=>setCorreo(e.target.value)}
          type="text"
          value={correo}
        />
        <input
          placeholder="Telefono"
          className="form-control mt-4"
          onChange={(e)=>setTelefono(e.target.value)}
          type="text"
          value={telefono}
        />
        <section className="container w-100">
          <input
            placeholder=""
            className="btn btn-success mt-5 form-control w-50"
            value={"Guardar"}
            type="submit"
          />
          <Link
            to={"/clientes"}
            className="btn btn-danger mt-5 form-control w-50"
          >
            Cancelar
          </Link>
        </section>
      </form>
    </section>
  );
};

export default CrearCliente;
