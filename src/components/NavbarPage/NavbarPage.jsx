import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./NavbarPage.css"
import './img/AdobeStock_251238249 1.svg'




export const NavbarPage = () => {
  return (
    <div className='nav'>
      <Container>
        <Row>
            <Col xl={2}>
             <h2 className="rism">2rism</h2>
            </Col>
            <Col xl={6}>
          <div className="box-2">
          <p className="home">home</p>
              <p className="hotels">hotels</p>
              <p className="hotels">restaurants</p>
              <p className="hotels">tours</p>
              <p className="hotels">destinations</p>
              <p className="hotels">activities</p>
              <p className="hotels">contact</p>
          </div>
            </Col>
        </Row>
        <Row>
          <Col xl={12}>
       <div className="disc">
       <h1 className="discover">Discover the most engaging places</h1>
       <button className='on'>Discover on 3D Globe</button>
       </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
