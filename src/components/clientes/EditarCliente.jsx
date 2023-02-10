import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {collection, getDoc, updateDoc, doc} from 'firebase/firestore'
import { dataBase } from "../../firebase/dataBase";

const EditarCliente = () => {
  const [cedula, setCedula] = useState();
  const [nombre, setNombre] = useState();
  const [correo, setCorreo] = useState();
  const [telefono, setTelefono] = useState();
  const navigate = useNavigate()
  const {id} = useParams()


  const actualizarCliente = async (e) => {
    e.preventDefault()
    const cliente = doc(dataBase, 'clientes', id)
    const data = {cedula, nombre, correo, telefono}
    await updateDoc(cliente, data)
    navigate('/clientes')
  }
  const mostrarCliente = async (id) => {
   const cliente = await getDoc(doc(dataBase, 'clientes', id))
   setCedula(cliente.data().cedula)
   setNombre(cliente.data().nombre)
   setCorreo(cliente.data().correo)
   setTelefono(cliente.data().telefono)
  }

  useEffect(()=> {
    mostrarCliente(id)
  }, [])

  return (
    <section className="container">
      <h1 className="m-5 text-center">Nuevo cliente</h1>
      <form
      onSubmit={actualizarCliente}
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

export default EditarCliente;
