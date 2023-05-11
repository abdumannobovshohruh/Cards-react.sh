import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image from "./img/bor"
export default function Cards() {
  return (
    <div>
  <Container>
    <Row>
        <Col xl={2}>
            <div className="box">
                <img src={image} alt="" className="image" />
            </div>
        </Col>
    </Row>
  </Container>
    </div>
  )
}
