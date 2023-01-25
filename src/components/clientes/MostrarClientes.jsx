import React, {useEffect, useState} from 'react'
import Header from '../helper/Header'
import {collection, doc, getDoc, getDocs, deleteDoc} from 'firebase/firestore'
import { dataBase } from '../../firebase/dataBase'

const MostrarClientes = () => {

  const [clientes, setClientes] = useState([])
  const tablaClientes = collection(dataBase, 'clientes')

  const listarClientes = async () => {
    const datos = await getDocs(tablaClientes)
    console.log(datos)
  }

  useEffect(()=>{
    listarClientes()
  }, [])

  return (
    <section className='container'>
      <Header />
      <table className='table'>
        <thead>
          <tr>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
      </table>
    </section>
  )
}

export default MostrarClientes