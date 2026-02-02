import React from 'react'
import { Card, CardBody, Col, Row } from 'react-bootstrap'

const Latestpostcard = ({value}) => {
  return (
    <div>
      <Row> 
        {
            value.map((item,index)=>{
                return(
                    <Col md='4'>
                        <Card className='mt-4 card-shadow rounded-4 overflow-hidden'>
                            <Card.Img src={item.post} className='rounded-0'/>
                            <Card.Body  >
                                <Card.Text>
                                    <p className='text-muted'>{item.category}</p>
                                </Card.Text>
                                <Card.Title>
                                    {item.title}
                                </Card.Title>
                                <Card.Text>
                                    <div className="d-flex align-items-center gap-3 ">
                                        <img src={item.profile} alt="" width={'50px'} height={'50px'} className='rounded-circle'/>
                                        <div>
                                            <h6>{item.author}</h6>
                                            <p className='text-muted'>{item.posted}</p>
                                        </div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })
        }
      </Row>
    </div>
  )
}

export default Latestpostcard
