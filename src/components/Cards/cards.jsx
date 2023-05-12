import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './cards.css'
import { data } from './data';
import { data2 } from './data2';
export default function Cards() {
  return (
    <div >
      <Container>
        <Row>
          <Col xl="3">
            <h3 className="popular">Popular Destinations</h3>
          </Col>
        </Row>
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
        <Row className='justify-content-between'>
          <Col xl="4">
            <h3 className="popular">Hotels and Restaurants</h3>
          </Col>
          <Col xl="2">
            <button className='all'>View all</button>
          </Col>
        </Row>
        <Row className='justify-content-between'>
          {data2?.map((e) => {
            return (
              <Col xl={3}>
                <div className="box-3">
                  <img src={e.img} alt="" className="imag" />
                  <h5 className='name'>{e.house}</h5>
                  <p className="CityName">{e.hosueName}</p>
                </div>
              </Col>
            )
          })}
        </Row>
        <Row className='justify-content-between'>
          <Col xl="4">
            <h3 className="popular">Travel Tips and Advice</h3>
          </Col>
          <Col xl="2">
            <button className='all'>View all</button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
