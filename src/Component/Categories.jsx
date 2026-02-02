import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Categorycontent from './Categorycontent'
const Categories = ({ value }) => {
    return (
        <div>
            <Row className='my-5'>
                {
                    value.map((item, index) => {
                        return (
                            <Col md={4}>
                                <img src={item.photo} alt="" width={'100%'} className='rounded' />
                                <div className="d-flex justify-content-between my-3 align-items-center">
                                    <b>{item.category}</b>
                                    <div>
                                        <img src={item.profile} alt="" className='rounded-circle' width={'25px'} /> <span>{item.author}</span>
                                    </div>
                                    <span className='text-muted'>- {item.date}</span>
                                </div>
                                <h5 className='fw-semi-bold p-1 '>{item.desc}</h5>
                            </Col>
                        )
                    })
                }
            </Row>
            <Categorycontent value={[{ category: "Gaming", content: "Quis autem vel eum iure reprehenderit qui in ea voluptate", time: "2 mins read", date: " 6 April 2026", photo: "https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-6.webp" },{ category: "Gaming", content: "Quis autem vel eum iure reprehenderit qui in ea voluptate", time: "2 mins read", date: " 6 April 2026", photo: "https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-6.webp" },{ category: "Gaming", content: "Quis autem vel eum iure reprehenderit qui in ea voluptate", time: "2 mins read", date: " 6 April 2026", photo: "https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-6.webp" },{ category: "Gaming", content: "Quis autem vel eum iure reprehenderit qui in ea voluptate", time: "2 mins read", date: " 6 April 2026", photo: "https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-6.webp" },{ category: "Gaming", content: "Quis autem vel eum iure reprehenderit qui in ea voluptate", time: "2 mins read", date: " 6 April 2026", photo: "https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-6.webp" },{ category: "Gaming", content: "Quis autem vel eum iure reprehenderit qui in ea voluptate", time: "2 mins read", date: " 6 April 2026", photo: "https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-6.webp" }]} />
        </div>
    )
}

export default Categories
