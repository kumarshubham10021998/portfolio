import React from 'react'
import title from '../../src/img/icon.png'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5 bg-white rounded fixed-top">
  <div className="container">
    <a className="navbar-brand" href="/" style={{fontSize:"30px", fontWeight: "bold",color:'#790966'}}> <img src={title} height="70"/> Soft-tech</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item fw-bold" style={{fontSize:"20px"}}>
          <a className="nav-link active " aria-current="page" href="about">About</a>
        </li>
        
        
       
      </ul>
      <a className='btn btn-outline-primary ms-2' href='contact'>Contact</a>
      <a className='btn btn-outline-primary ms-2' href=''>Help</a>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
