import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='container'>
      <img src="" alt="Logo" />
      <nav className='container'>
        <Link to={'/'} >Home</Link>
        <Link to={'/clientes'} >Clientes</Link>
        <Link to={'/contacto'} >Contacto</Link>
      </nav>
    </header>
  )
}

export default Header