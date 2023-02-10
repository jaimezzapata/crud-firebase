import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/react.svg'

const Header = () => {
  return (
    <header className='container d-flex justify-content-around w-100 mt-3 mb-3 bg-danger p-3'>
      <section className='w-25 d-flex justify-content-start align-content-center'>
        <img src={logo} alt="Logo" />
      </section>
      <nav className='container w-75 d-flex justify-content-end align-content-center'>
        <Link className='nav-link btn btn-info m-2 p-2 form-control w-25' to={'/'} >Home</Link>
        <Link className='nav-link btn btn-info m-2 p-2 form-control w-25' to={'/clientes'} >Clientes</Link>
        <Link className='nav-link btn btn-info m-2 p-2 form-control w-25' to={'/contacto'} >Contacto</Link>
      </nav>
    </header>
  )
}

export default Header