import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div style={{width:'100%',height:'100px',marginTop:'300px'}}>
      <MDBFooter bgColor='dark' className=' text-lg-start text-muted'>

      <section style={{paddingTop:'10px'}} className='foot'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h3 style={{color:'white'}} className='text-uppercase  mb-4'>
                <MDBIcon  color='yellow' icon='video player' className='me-3' />
                Video Player
              </h3>
              <p style={{color:"white"}}>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 style={{color:'white'}} className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <Link to='/'  style={{color:"white"}}>
                <a  href='' className='text-reset'>
                  Landing Page
                </a>
                </Link>
              </p>
              <p>
              <Link to='/home'  style={{color:"white"}}>
                <a href='' className='text-reset'>
                  Home Page
                </a>
                </Link>
              </p>
              <p>
              <Link to='/watchhistory'style={{color:"white"}} >
                <a href='' className='text-reset'>
                  Watch History
                </a>
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className=' mb-4'>
              <h6 style={{color:'white'}} className='text-uppercase fw-bold'>Guides</h6>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React Boootstrap
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Bootswatch
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 style={{color:'white'}} className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p>

              <span><MDBInput style={{color:"white"}} label='Email ' id='typeEmail' type='email' /><MDBBtn style={{backgroundColor:'orange'}}>Sub</MDBBtn> </span>             

              <div>
              <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='instagram' />
          </a>

          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='facebook-f' />
          </a>
          </div>



              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)',color:'white' }}>
         Copyright © 2023:
        <a className='text-reset' href='https://mdbootstrap.com/'>
          Media Player.Built with React
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer