import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Postcards = ({ value }) => {
    return (
        <div>
            <Row>

                {
                    value.map((item, index) => {
                        return (
                            <Col md={4} className='mt-3'>
                                <div className="heroblog text-white">
                                    <img src={item.photo} alt="" width={'100%'} className='rounded' />
                                    <div className="overlay-content d-flex justify-content-end align-items-center flex-column rounded gap-3 px-4">
                                        <div>

                                            <div className='d-flex gap-2 justify-content-start'>
                                                <span><i class="fa-regular fw-light fa-user"></i> {item.author}</span>
                                                <span><i class="fa-regular fw-light fa-clock"></i> {item.date}</span>
                                            </div>
                                            <span><i class="fa-regular fw-light fa-comment"></i> {item.comment} comments</span>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
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

export default Postcards
