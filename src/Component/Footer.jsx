import Link from '@mui/material/Link'
import React from 'react'

const Footer = () => {
    return (
        <div className=' container'>
            <hr />
            <div className="d-flex flex-wrap justify-content-between">
                <div className='ps-3'>
                    <h4 className="fw-normal p-3">Blogy</h4>
                    <p className="text-muted ps-3" >A108 Adam Street New York, NY 535022</p>
                    <p className="text-muted ps-3 lh-1  "><span className="fw-semibold text-dark">Phone:</span> +1 5589 55488 55</p>
                    <p className="text-muted ps-3 lh-1  "><span className="fw-semibold text-dark">Email:</span> info@example.com</p>
                    <div className="d-flex gap-4 fs-6 ps-3 mt-4">

                        <div id="brand-icons" style={{ border: '1px solid gray', color: 'gray' }} className="rounded-circle"><i class="fa-brands fa-x-twitter"></i></div>
                        <div id="brand-icons" style={{ border: '1px solid gray', color: 'gray' }} className="rounded-circle"><i class="fa-brands fa-facebook"></i></div>
                        <div id="brand-icons" style={{ border: '1px solid gray', color: 'gray' }} className="rounded-circle"><i class="fa-brands fa-instagram"></i></div>
                        <div id="brand-icons" style={{ border: '1px solid gray', color: 'gray' }} className="rounded-circle"><i class="fa-brands fa-linkedin"></i></div>
                    </div>
                </div>
                <div className="d-flex gap-5 flex-wrap">
                    <div>
                        <h6 >Useful Links</h6>
                        <Link href="/" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Home</Link>
                        <Link href="/about" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>About</Link>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Services</Link>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Terms of Service</Link>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Privacy Policy</Link>
                    </div>
                    <div>
                        <h6 >Our Services</h6>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Web Design</Link>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Web Development</Link>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Product Management</Link>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Marketing</Link>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Graphic Design</Link>
                    </div>
                    <div>
                        <h6 >Hic solutasetp</h6>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Molestiae accusamus iure</Link>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Excepturi dignissimos</Link>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Suscipit distinctio</Link>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Dilecta</Link>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Sit quas consectetur</Link>
                    </div>
                    <div>
                        <h6 >Nobis illum</h6>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Ipsam</Link>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Laudantium dolorum</Link>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Dinera</Link>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Trodelas</Link>
                        <Link href="#" underline="none" color="textSecondary" className='d-block mt-3 text-muted fs-6 lh-1'>Flexo</Link>
                    </div>
                </div>
            </div>
            <hr />
            
        </div>
    )
}

export default Footer
