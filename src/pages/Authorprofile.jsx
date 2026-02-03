import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Profile from '../Component/Profile'
import Aboutauthor from '../Component/Aboutauthor'

const Authorprofile = () => {
  return (
    <div>
       <h1 className="text-center mt-5 " style={{ color: "#334456" }}>Author Profile</h1>
      <div className="container">
        <h5 className="text-center fw-normal w-75 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos accusantium deleniti autem deserunt nobis quae qui soluta distinctio enim!</h5>
     
      <Row>
        <Col md='4'>
          <Profile/>
        </Col>
        <Col md='8'>
          <Aboutauthor/>
        </Col>
      </Row>
       </div>
    </div>
  )
}

export default Authorprofile
