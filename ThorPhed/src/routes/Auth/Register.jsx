import React from 'react';
import './Auth.css';

// Components
import {Link} from 'react-router-dom';

// Hooks
import { useState, useEffect } from 'react';

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h2>JunglePhed</h2>
      <p className='subtitle'>Cadastre-se para fazer parte da comunidade.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nome'/>
        <input type="email" placeholder='E-mail' />
        <input type="password" placeholder='Senha' />
        <input type="password" placeholder='Confirmar senha' />
        <input type="submit" value="Cadastrar"/>
      </form>
      <p>Já possui uma conta? <Link to='/login'>Clique aqui</Link></p>
    </div>
  )
}

export default Register