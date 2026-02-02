import React from 'react'

const Sidebar = () => {
    let tags = ['App', 'IT', 'Business', 'Mac', 'Design', 'Office', 'Creative', 'Studio', 'Smart', 'Tips', 'Marketing']
    let posts = [{ photo: 'https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-square-1.webp', title: 'Nihil blanditiis at in nihil autem', date: 'Jan 1, 2020' },
        { photo: 'https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-square-2.webp', title: 'Nihil blanditiis at in nihil autem', date: 'Jan 1, 2020' },{ photo: 'https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-square-3.webp', title: 'Nihil blanditiis at in nihil autem', date: 'Jan 1, 2020' },{ photo: 'https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-square-4.webp', title: 'Nihil blanditiis at in nihil autem', date: 'Jan 1, 2020' },{ photo: 'https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-square-5.webp', title: 'Nihil blanditiis at in nihil autem', date: 'Jan 1, 2020' }
    ]
    return (
        <div className=' my-5 '>
            <div className='border border-1 p-3 mb-3 rounded-3'>

                <p className="fs-4 fw-semibold">Search</p>
                <input type="text" className="form-control rounded-pill" />
            </div>
            <div className='border border-1 p-3 mb-3 rounded-3'>
                <p className="fs-4 fw-semibold">Categories</p>
                <ul type='none'>
                    <li className='mb-2'>General (25)</li>
                    <li className='mb-2'>Lifestyle (12)</li>
                    <li className='mb-2'>Travel (5)</li>
                    <li className='mb-2'>Design (22)</li>
                    <li className='mb-2'>Creative (8)</li>
                    <li className='mb-2'>Education (14)</li>
                </ul>
            </div>
            <div className='border border-1 p-3 mb-3 rounded-3'>

                <p className="fs-4 fw-semibold">Recent Posts</p>
                {
                    posts.map((item, index) => {
                        return (
                            <div className="d-flex gap-3 mb-3">
                                <div className="w-25">

                                    <img src={item.photo} alt="" width={'100%'} />
                                </div>
                                <div className='w-75'>
                                    <p className='fw-semibold mb-1'>{item.title}</p>
                                    <span style={{ color: '#aaa' }}>{item.date}</span>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <div className='border border-1 p-3 mb-3 rounded-3'>

                <p className="fs-4 fw-semibold">Tags</p>
                <div className="d-flex flex-wrap gap-2">

                    {
                        tags.map((item, index) => {
                            return (
                                <button className='border border-none rounded-pill px-3 '>{item}</button>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Sidebar
