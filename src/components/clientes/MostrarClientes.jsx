import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Header from "../helper/Header";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { dataBase } from "../../firebase/dataBase";

const MostrarClientes = () => {
  const [clientes, setClientes] = useState([]);
  const tablaClientes = collection(dataBase, "clientes");

  const listarClientes = async () => {
    const datos = await getDocs(tablaClientes);
    console.log(datos);
    setClientes(datos.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(clientes);
  };

  const eliminarCliente = async (id) => {
    const clienteDelete = doc(dataBase, "clientes", id);
    await deleteDoc(clienteDelete);
    listarClientes();
  };

  useEffect(() => {
    listarClientes();
  }, []);

  return (
    <section className="container">
      <Header />
      <Link to={'/crear'} className="btn btn-success">Crear</Link>
      <table className="table">
        <thead>
          <tr>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.cedula}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.correo}</td>
              <td>{cliente.telefono}</td>
              <td>
                <button
                  onClick={() => eliminarCliente(cliente.id)}
                  className="btn btn-danger"
                >
                  <i class="fa fa-trash"></i>
                </button>
                <Link to={`/editar/${cliente.id}`} className="btn btn-warning">
                  <i class="fa fa-pen"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MostrarClientes;
