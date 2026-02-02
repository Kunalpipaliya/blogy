import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Categorycontent = ({value}) => {
  return (
    <div>
        <Row>
            {
                value.map((item,index)=>{
                    return(

                        <Col md={4} className='mt-3'>
                        <div className="d-flex align-items-start gap-3">
                            <img src={item.photo} alt="" width={'100px'} height={'100px'}  className='rounded' />
                            <div className='d-flex flex-column gap-2'>
                                <b>{item.category}</b>
                                <p>{item.content}</p>
                                <div className="d-flex gap-2">
                                    <span>{item.time}</span>
                                    <span>.</span>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    )
                })
            }
        </Row>
    </div>
  )
}

export default Categorycontent
