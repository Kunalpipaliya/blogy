import React from 'react'
import { Col,Row } from 'react-bootstrap'
import ContactForm from '../Component/ContactForm'

const Contact = () => {
  let detail=[{icon:'fa-solid fa-location-dot',title:'Our Address',info:'2847 Rainbow Road, Springfield, IL 62701, USA'},{icon:'fa-solid fa-phone',title:'Contact Number',info:'Mobile: +1 (555) 123-4567 Email: info@example.com'},{icon:'fa-regular fa-clock',title:'Opening Hour',info:'Monday - Saturday: 9:00 - 18:00 Sunday: Closed'}]
  return (
    <div>
      <h1 className="text-center mt-5 " style={{ color: "#334456" }}>Contact</h1>
      <div className="container">
        <h5 className="text-center fw-normal w-75 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos accusantium deleniti autem deserunt nobis quae qui soluta distinctio enim!</h5>
        <div className="mt-5">
          <Row>
            {
              detail.map((item,index)=>{
                return(
                  <Col md='4'>
                    <div className="border border-1 px-5 py-4 text-center rounded-4 h-100 d-flex flex-column align-items-center justify-content-center  ">
                      <i id='brand-icons' className={item.icon} style={{borderRadius: '50%', background: 'color-mix(in srgb, #f75815, transparent 85%)', color: '#f75815' }}></i>
                      <h4 className="mt-3">{item.title}</h4>
                      <p className="text-muted">{item.info}</p>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Contact
