import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import telegram from './img/logo.svg'
import telegram2 from './img/socials.svg'
import end from './img/input.svg'
import './footer.css'
export default function FooterPage() {
  return (
    <div>
      <footer>
   <div className="tur2">
   <Container>
            <Row className='mt-6 justify-content-between'>
                <Col xl={3}>
                    <img src={telegram} alt="" className="tur" />
                    <p className="always-text">We always make our customers happy by providing as many choises as possible</p>
                    <img src={telegram2} alt="" className="tur1" />
                </Col>
                <Col xl={2}>
                  <p className="about">About</p>
                  <p className="new">About Us</p>
                  <p className="new">Features</p>
                  <p className="new">News</p>
                  <p className="new">Menu</p>
                </Col>
                <Col xl={2}>
                  <p className="about">Company</p>
                  <p className="new">Why 2rism</p>
                  <p className="new">Partner With Us</p>
                  <p className="new">FAQ</p>
                  <p className="new">Blog</p>
                </Col>
                <Col xl={2}>
                  <p className="about">Account</p>
                  <p className="new">Support Center</p>
                  <p className="new">Feedback</p>
                  <p className="new">Contact Us</p>
                </Col>
                <Col xl={3}>
                  <p className="subs">Subscribe on our destination review newsletters</p>
                  <img src={end} alt="" className="end" />
                </Col>
            </Row>
        </Container>
   </div>
      </footer>
    </div>
  )
}
