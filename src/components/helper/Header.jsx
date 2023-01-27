import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='container d-flex justify-content-around w-100'>
      <img className='w-25' src="" alt="Logo" />
      <nav className='container w-75 d-flex justify-content-end align-content-center'>
        <Link className='nav-link btn btn-info m-2 p-2 form-control w-25' to={'/'} >Home</Link>
        <Link className='nav-link btn btn-info m-2 p-2 form-control w-25' to={'/clientes'} >Clientes</Link>
        <Link className='nav-link btn btn-info m-2 p-2 form-control w-25' to={'/contacto'} >Contacto</Link>
      </nav>
    </header>
  )
}

export default Header