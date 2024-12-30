import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar w/ text</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
           <NavLink to="/" class="nav-link px-2" aria-current="page">Home</NavLink>
          </li>
          <li class="nav-item">
           <NavLink to="/about" class="nav-link px-2">About</NavLink>
          </li>
          <li class="nav-item">
           <NavLink to="/product" class="nav-link px-2">Product</NavLink>
          </li>
        </ul>
       <NavLink to={"cart" } class="btn btn-outline-light me-2">Cart</NavLink>
      </div>
    </div>
  </nav>
  )
}

export default Header