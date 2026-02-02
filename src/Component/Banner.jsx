import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Banner = () => {
    return (
        <div className='banner-section'>
            <Row className=' px-5 py-4 align-items-center'>
                <Col md='7'>
                    <b style={{background:"color-mix(in srgb, #f75815, transparent 90%)"}} className='px-2 py-1 rounded-pill'>DON'T MISS</b>
                    <br />
                    <h1>Revolutionize Your Digital Experience Today</h1>
                    <br />
                    <p className='fs-5'>Strategia accelerates your business growth through innovative solutions and cutting-edge technology. Join thousands of satisfied customers who have transformed their operations.</p>
                    <br />
                    <Row>
                        <Col md='4' className='bg-white shadow-sm text-center fw-bold py-2 rounded d-flex align-items-center justify-content-center gap-2'><i class="fa-solid fa-circle-check"></i> Premium Support</Col>
                        <Col md='4' className='bg-white shadow-sm text-center fw-bold py-2 rounded d-flex align-items-center justify-content-center gap-2'><i class="fa-solid fa-circle-check"></i> Cloud Integration</Col>
                        <Col md='4' className='bg-white shadow-sm text-center fw-bold py-2 rounded d-flex align-items-center justify-content-center gap-2'><i class="fa-solid fa-circle-check"></i> Real-time Analytics</Col>
                    </Row>
                    <br />
                    <button className="border-0 px-4 fw-semibold py-2 text-white rounded my-2" style={{background:"#f75815"}}>Start Free Trial</button>
                </Col>
                <Col md='5'><img src="https://bootstrapmade.com/content/demo/Blogy/assets/img/misc/misc-1.webp" alt="" width={'100%'} className='rounded-4'/></Col>
            </Row>
        </div>
    )
}

export default Banner
