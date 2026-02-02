import React from 'react'
import { Card, CardBody, Col, Row, Table } from 'react-bootstrap'

const Hero = ({ value }) => {
    return (
        <div>
            <table cellPadding={'5px'} className='m-4 mx-5'>
                <tbody>
                    <tr>
                        <td colSpan={'2'}>
                            <img src="https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-3.webp" className='rounded' alt="" width={'100%'} />
                        </td>
                        <td>
                            <img src="https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-portrait-1.webp" className='rounded' alt="" width={'100%'} height={'100%'} />
                        </td>
                    </tr>
                    <tr>

                        {/* <td><img src="https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-9.webp" className='rounded' alt="" width={'100%'} /></td>
                        <td><img src="https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-7.webp" className='rounded' alt="" width={'100%'} /></td>
                        <td><img src="https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-6.webp" className='rounded' alt="" width={'100%'} /></td> */}
                        {
                            value.map((item, index) => {
                                return (
                                    <td>
                                        <div className="heroblog rounded ">
                                            <img src={item.photo} alt="" width={'100%'} className='rounded' />
                                            <div className="overlay-content d-flex flex-column justify-content-center align-items-center text-white">
                                                <div className="d-flex gap-2">
                                                    <span><i class="fa-solid fa-angle-down"></i> {item.date}</span>
                                                    <span><i class="fa-solid fa-ellipsis-vertical"></i> {item.category}</span>
                                                </div>
                                                <h2 className="text-center">
                                                    {item.description}
                                                </h2>
                                            </div>
                                        </div>
                                    </td>
                                )
                            })
                        }
                    </tr>


                </tbody>
            </table>
        </div>
    )
}

export default Hero
