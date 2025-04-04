import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' 
    style={{backgroundImage: "url('../public/header_img.png')"}} id='Header'>
      <Navbar />
      <div>
        <h2>Explore Homes that fit your dreams</h2>
        <a href=''>Projects</a>
        <a href=''>Contact Us</a>
      </div>
    </div>
  )
}

export default Header