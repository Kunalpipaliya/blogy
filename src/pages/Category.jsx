import React from 'react'
import Latestpost from '../Component/Latestpost'
import Blogs from '../Component/Blogs'
import { Row,Col } from 'react-bootstrap'
import Sidebar from '../Component/Sidebar'
const Category = () => {
  return (
    <div >
      <h1 className="text-center mt-5 " style={{ color: "#334456" }}>Blog Category</h1>
      <div className="container">
        <h5 className="text-center fw-normal w-75 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos accusantium deleniti autem deserunt nobis quae qui soluta distinctio enim!</h5>
      </div>
      <Row className='container m-auto'>
        <Col md="8">
          <Blogs />
        </Col>
        <Col md="4">
            <Sidebar/>
        </Col>
      </Row>
    </div>
  )
}

export default Category
