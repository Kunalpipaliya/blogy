import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Blogdetailscomp = () => {
    return (
        <div className='mt-5 mb-5'>
            <img src="https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-3.webp" alt="" width={'100%'} className='rounded-4' />
            <h1 className='mt-5' style={{ fontSize: '50px' }}>Modern Web Development: Best Practices and Future Trends for 2025</h1>
            <div className="d-flex justify-content-between align-items-center mt-4 ">
                <div className="d-flex gap-3">
                    <img src="https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-f-8.webp" alt="" width={'50px'} height={'50px'} className='rounded-circle' />
                    <div className='d-flex flex-column  '>
                        <span className='fs-6'>Michael Chen</span>
                        <small className='text-muted'>Senior Web Developer</small>
                    </div>
                </div>
                <div className="d-flex gap-3">
                    <p className="text-muted"> Mar 15, 2025 </p>
                    <p className="text-muted">18 Comments</p>
                </div>
            </div>
            <hr />
            <h5 className='lh-lg mt-5' style={{ color: '#334456' }}>The landscape of web development continues to evolve at an unprecedented pace, bringing new technologies, frameworks, and methodologies that reshape how we build modern web applications.</h5>
            <p className="fs-5 mt-4">As we delve into 2025, the web development ecosystem has transformed dramatically, introducing innovative approaches to building faster, more secure, and highly engaging web experiences. This comprehensive guide explores the latest trends and best practices that are defining the future of web development.</p>
            <Row>
                <Col md='4'>
                    <p className="fs-1 fw-normal lh-sm" style={{ color: '#334456' }}>The Rise of Web Components</p>
                    <h5 className='fw-normal lh-base'>Web Components have become increasingly crucial in modern web development, offering a standardized way to create reusable custom elements. Key advantages include:</h5>

                </Col>
                <Col md='8'>
                    <Card className='overflow-hidden rounded-4 shadow-lg'>
                        <Card.Img src="https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-hero-2.webp" alt="" width={'100%'} className='rounded-0' />
                        <Card.Body>
                            <Card.Text className='text-center'>Modern development environments emphasize collaboration and efficiency</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ul>
                <li className='fs-5 lh-lg'>Enhanced code reusability across different frameworks</li>
                <li className='fs-5 lh-lg'>Better encapsulation of functionality</li>
                <li className='fs-5 lh-lg'>Improved maintenance and scalability</li>
                <li className='fs-5 lh-lg'>Framework-agnostic component development</li>
            </ul>
        </div>
    )
}

export default Blogdetailscomp
