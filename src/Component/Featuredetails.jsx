import React from 'react'
import {Row, Col } from 'react-bootstrap'

const Featuredetails = ({value}) => {
  return (
    <div>
      <Row>
       {
        value.map((item,index)=>{
            return(
                <Col md="4">
                <span className='p-3 rounded-4' style={{background: "color-mix(in srgb, #f75815, transparent 90%)",color:'#f75815'}}>{item.icon}</span>
                <h3 className='mt-3'>{item.title}</h3>
                <p>{item.description}</p>
                </Col>
                
            )
        })
       }
      </Row>
    </div>
  )
}

export default Featuredetails
