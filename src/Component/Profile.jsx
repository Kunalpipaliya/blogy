import React from 'react'

const Profile = () => {
    return (
        <div className='mt-5'>
            <div className="p-4 shadow-sm rounded-4">

                <div className='p-5'>

                    <img src="https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-m-5.webp" alt="" width={'100%'} className='rounded' />
                </div>
                <h3 className='text-center font-nutino'>Kevin Anderson</h3>
                <p className="text-muted text-center">Senior Technology Writer</p>
                <p className="mt-3 text-center">Through my articles, I explore the intersection of technology and society, focusing on how emerging tech shapes our daily lives and future possibilities.</p>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column align-items-center ">
                        <span className='fs-3' style={{color:'#f75815'}}>147</span>
                        <small className="text-muted">Articles</small>
                    </div>
                    <div className="d-flex flex-column align-items-center ">
                        <span className='fs-3' style={{color:'#f75815'}}>13</span>
                        <small className="text-muted">Awards</small>
                    </div>
                    <div className="d-flex flex-column align-items-center ">
                        <span className='fs-3' style={{color:'#f75815'}}>25</span>
                        <small className="text-muted">Followers</small>
                    </div>
                </div>
                <hr />
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
            </div>
        </div>
    )
}

export default Profile
