import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

function Navbar() {
    const state = useSelector((state)=>{
        return state.ChangeData
    })
    return (
    <nav className="navbar navbar-expand-lg m-1 shadow  navbar-light bg-light position-sticky top-0">
    <div className="container-fluid">
      <Link className="navbar-brand p-1  mx-2" to="/">E-commerce</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item listItem">
            <Link className="nav-link active p-1  mx-2 " aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item listItem">
            <Link className="nav-link active p-1  mx-2 " to="/product">Products</Link>
          </li>
          <li className="nav-item listItem">
            <Link className="nav-link active p-1  mx-2 " to="/about">About</Link>
          </li>
         
        </ul>
        

        <Link className="nav-link p-0 d-grid my-1" to="/login"><button type="button" className="btn btn-outline-success mx-2 justify-content-md-end py-2 px-3"><i className="fa-solid fa-right-to-bracket mx-2"></i>Login</button></Link>
        <Link className="nav-link p-0 d-grid my-1" to="/signup"><button type="button" className="btn btn-outline-success mx-2 justify-content-md-end py-2"><i className="fa-solid fa-user mx-2"></i>SignUp</button></Link>
    
       <Link className="nav-link p-0 d-grid my-1" to="/cart"><button type="button" className="btn btn-outline-success mx-2 justify-content-md-end py-2"><i className="fa-solid fa-cart-shopping mx-2 "></i>Cart({state.length})</button></Link>
      </div>
    </div>
  </nav>
  )
}

export default Navbar