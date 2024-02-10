import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div> 
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand>
        <Link to={'/'} style={{textDecoration: 'none', color:'black', fontsize: '30px'}} >
      <i class="fa-solid fa-play fa-sm"></i>
      {' '}
        Media Player
        </Link>
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header