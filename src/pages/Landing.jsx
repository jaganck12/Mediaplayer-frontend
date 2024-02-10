import React from 'react'
import {Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landing() {

  const navigateByUrl= useNavigate()

  return (
    <>
    <Row className='mt-5 align-item-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5} style={{paddingTop:'100px'}} >
        <h1 style={{textAlign:'justify'}}> Welcome to <span className='text-warning' >Video player</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius facere ex possimus eveniet laudantium nemo quo culpa esse neque! Minus provident minima sapiente! Vero debitis quas voluptate eaque accusamus.</p>
        <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-info' >Get Started</button>
      </Col>
      <Col lg={5}>
        <img src="https://i.gifer.com/YUM3.gif" alt="" height={400} width={700}/>
      </Col>
      <Col></Col>
    </Row>
    <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
      <h3>Features</h3>
      <div className='cards mb-5 d-flex align-item-center justify-content-between w-100'>
        <Card className='p-5 bg-info' style={{width: '22rem'}} >
        <Card.Img height={'300px'} width={'300px'} variant="top" src='https://cdn.dribbble.com/users/1064465/screenshots/2851688/gti_drift_2.0.gif'/>
        <Card.Body>
          <Card.Title> Managing Video </Card.Title>
          <Card.Text>
            A car drift
          </Card.Text>
        </Card.Body>
        </Card>

        <Card className='p-5 bg-info' style={{width: '22rem'}} >
        <Card.Img height={'300px'} width={'300px'} variant="top" src='http://www.clipartbest.com/cliparts/dc7/pqq/dc7pqq6Gi.gif'/>
        <Card.Body>
          <Card.Title> Managing Video </Card.Title>
          <Card.Text>
            Dancing
          </Card.Text>
        </Card.Body>
        </Card>

        <Card className='p-5 bg-info' style={{width: '22rem'}} >
        <Card.Img height={'300px'} width={'300px'} variant="top" src='https://i.pinimg.com/originals/47/03/09/4703093a70ba47001bf2c86319aae091.gif'/>
        <Card.Body>
          <Card.Title> Managing Video </Card.Title>
          <Card.Text>
           A dude trying to out run the world  
          </Card.Text>
        </Card.Body>
        </Card>

      </div>

    </div>

    <div className='container border rounded p-5 border-secondary b-5 mt-5 d-flex align-items-center justify-content-between w-100 bg-info'>
  <div className='col-lg-5'>
    <h3 className='mb-3 text-danger'>Simple,Powerful & Fast</h3>
    <h6 className='mb-5'><span className='fs-5 fw-bolder text-danger'>Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis autem harum soluta delectus est dolores omnis non corrupti recusandae officiis eveniet consequatur ipsum, eaque nisi ad ipsam cumque aspernatur.</h6>

    <h6 className='mb-5'><span className='fs-5 fw-bolder text-danger'>Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis autem harum soluta delectus est dolores omnis non corrupti recusandae officiis eveniet consequatur ipsum, eaque nisi ad ipsam cumque aspernatur.</h6>

    <h6 className='mb-5'><span className='fs-5 fw-bolder text-danger'>Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis autem harum soluta delectus est dolores omnis non corrupti recusandae officiis eveniet consequatur ipsum, eaque nisi ad ipsam cumque aspernatur.</h6>

  </div>

  <div className='video col-lg-5 me-5'>

  <iframe width="560" height="315" src="https://www.youtube.com/embed/ScznReRong4?si=zHOEfxZ-G4vtnLte" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
  </div>
</div>
    </>
  )
}

export default Landing