import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Teamdetails = ({ value }) => {
    return (
        <div>
            <div>

                <Row>
                    {

                        value.map((item, index) => {
                            return (
                                <Col md="6" className='mt-4'>
                                    <div className="d-flex gap-3 border border-1 rounded-3 overflow-hidden">

                                        <div className='w-100'>
                                            <img src={item.photo} alt="" width={'100%'} style={{ objectFit: 'cover', height: 'auto' }} />
                                        </div>
                                        <div className='d-flex flex-column justify-content-center w-100 ' >
                                            <p className="fs-5 fw-semibold" style={{ color: "#334456" }}>{item.name}</p>
                                            <p className="text-muted">{item.position}</p>
                                            <p className='text-justify'>{item.about}</p>
                                            <div className='d-flex gap-3'>
                                                <FacebookIcon />
                                                <XIcon />
                                                <LinkedInIcon />
                                                <YouTubeIcon />
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}

export default Teamdetails
