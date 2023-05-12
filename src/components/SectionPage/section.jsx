import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import photo1 from './img/img.svg'
import photo2 from './img/img (1).svg'
import boys from './img/col.svg'
import './section.css'
import { SectionPage } from './sectionPage'
export default function Section() {
  return (
    <>
    <Container>
        <Row>
            <Col xl={6}>
                <div className="box4 d-flex justify-content-center align-items-start">
                    <img src={photo1} alt="" className="vila" />
                    <div className="night ms-3">
                        <h3 className="east">East Village Ice Cream Crawl</h3>
                        <p className="we">We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…</p>
                    </div>
                </div>
            </Col>
            <Col xl={6}>
                <div className="box4 d-flex justify-content-center align-items-start">
                    <img src={photo2} alt="" className="vila" />
                    <div className="night ms-3">
                        <h3 className="east">Brooklyn Bridge cinematic photo walk</h3>
                        <p className="we">This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge. </p>
                    </div>
                </div>
            </Col>
        </Row>
          <Row className='justify-content-between'>
          <Col xl="4">
            <h3 className="popular">Activities</h3>
          </Col>
          <Col xl="2">
            <button className='all'>View all</button>
          </Col>
        </Row>
        <Row className='justify-content-between'>
          {SectionPage?.map((br) => {
            return(    <Col xl={3}>
              <img src={br.photo} alt="" className="star" />
              <p className="hiking">{br.name}</p>
          </Col>)
          })}
        </Row>
    </Container>
    <Container>
      <Row className='mt-5 justify-content-center'>
        <Col xl={5}>
          <div className="box-6">
            <h2 className='us'>About Us</h2>
            <p className="dolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <button className='read'>Read more</button>
          </div>
        </Col>
        <Col xl={5}>
          <img className='boys' src={boys} alt="" />
        </Col>
      </Row>
    </Container>
    </>
  )
}
