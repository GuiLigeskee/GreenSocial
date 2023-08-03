import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.Module.css'
import {BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill} from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav id="nav">
      <Link to="/"><span>Jungle</span>Phed</Link>
      <form id='search-form'>
        <BsSearch/>
        <input type="text" placeholder='pesquisar'/>
      </form>
      <ul id="nav-links">
        <li>
          <NavLink to="/">
            <BsHouseDoorFill/>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">Entrar</NavLink>
        </li>
        <li>
          <NavLink to="/register">Cadastrar</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar