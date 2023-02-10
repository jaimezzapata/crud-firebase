import React from 'react'
import Header from '../helper/Header'
import img from '../../../public/crm.jpg'

const Home = () => {
  return (
    <section className='container'>
      <Header />
      <img className='w-100' src={img} alt="" />
    </section>
  )
}

export default Home