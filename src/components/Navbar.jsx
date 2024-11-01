import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="container nav_bar"
    data-aos="fade-down"
    data-aos-duration="1000"
    >
        <div className="left nav_items">Portfolio</div>
        <div className="right">
            <a href="#home" className="nav_items">Home</a>
            <a href="#experiance" className="nav_items">Experiance</a>
            <a href="#skills" className="nav_items">Skills</a>
            <a href="#projects" className="nav_items">Projects</a>
            <a href="#contect" className="nav_items">Contect</a>
        </div>
    </div>
    </>
  )
}

export default Navbar;