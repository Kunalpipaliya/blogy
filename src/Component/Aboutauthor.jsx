import React from 'react'
import Category from '../pages/Category'
import { Card, Col,Row } from 'react-bootstrap'

const Aboutauthor = () => {
    let expertise=['Artificial Intelligence','Cybersecurity','Smart Home Technology','Digital Privacy','Consumer Electronics','Future Tech Trends']
    let article=[{photo:'https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-10.webp',Category:'Technology',title:'The Future of AI in Everyday Computing',date:'Jan 15, 2024',comment:'24 Comments'},{photo:'https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-6.webp',Category:'Privacy',title:'Understanding Digital Privacy in 2024 ',date:'Feb 3, 2024',comment:'18 Comments'}]
  return (
    <div className='mt-5'>
        <div className="p-4 shadow-sm rounded-4">
            <h3 className="fw-normal">About me</h3>
            <p className="fs-6 mt-4">With over a decade of experience in technology journalism, I've had the privilege of witnessing and documenting the rapid evolution of our digital landscape. My work spans from in-depth analysis of artificial intelligence and its implications to hands-on reviews of the latest consumer technology.</p>
            <h5 className="fw-normal mt-4">Areas of Expertise</h5>
            <div className="d-flex gap-2 flex-wrap mt-3">
                {
                    expertise.map((item,index)=>{
                        return(
                            <span className="rounded-pill px-3 p-2" style={{background:'color-mix(in srgb, #f75815, transparent 90%)', color: '#f75815'}}>{item}</span>
                        )
                    })
                }
            </div>
            <h5 className="fw-normal mt-4">Featured Articles</h5>
            <Row>
                {
                    article.map((item,index)=>{
                        return(
                            <Col md='6'>
                                <Card className='border border-0 shadow-sm'>
                                    <Card.Img variant="top" src={item.photo} />
                                <Card.Body>
                                    <Card.Text className='p-3'>
                                         <span className="rounded-pill px-2 p-1 fs-6 " style={{background:'color-mix(in srgb, #f75815, transparent 90%)', color: '#f75815'}}>{item.Category}</span>
                                         <p className='fs-5 mt-2'>{item.title}</p>
                                         <div className="d-flex gap-3">
                                            <div className="d-flex gap-2 align-items-center">
                                                <i class="fa-regular fa-clock text-muted"></i>
                                                <span className="text-muted">{item.date}</span>
                                            </div>
                                             <div className="d-flex gap-2 align-items-center">
                                               <i class="fa-regular fa-comment-dots text-muted"></i>
                                                <span className="text-muted">{item.comment}</span>
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
    </div>
  )
}

export default Aboutauthor
