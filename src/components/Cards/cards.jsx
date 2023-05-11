import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './cards.css'
import { data } from './data';
export default function Cards() {
  return (
    <div >
      <Container>
        <Row >
          {data?.map((res) => {
            return (
              <Col xl={2}>
                <div className="box">
                  <img src={res.img} alt="" className="image" />
                  <h5 className="name">{res.name}</h5>
                  <p className="CityName">{res.cityName}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}
