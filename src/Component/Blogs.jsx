import React from 'react'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import Latestpost from './Latestpost'
import Blogcard from './Blogcard'
const Blogs = () => {
  return (
    <div className='my-5'>
        
        <Blogcard value={[{category:"Politics",title:"Dolorum optio tempore voluptas dignissimos",post:"https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-1.webp",author:"Maria Doe",posted:"Jan 1, 2022",profile:"https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-f-12.webp"},{category:"Sports",title:"Nisi magni odit consequatur autem nulla dolorem",post:"https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-2.webp",author:"Allisa Mayer",posted:"Jun 5, 2022",profile:"https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-f-13.webp"},{category:"Entertainment",title:"Possimus soluta ut id suscipit ea ut in quo quia et soluta",post:"https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-3.webp",author:"Mark Dower",posted:"Jun 22, 2022",profile:"https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-m-10.webp"},{category:"Sports",title:"Non rem rerum nam cum quo minus olor distincti",post:"https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-4.webp",author:"Lisa Neymar",posted:"Jun 30, 2022",profile:"https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-f-14.webp"},{category:"Politics",title:"Accusamus quaerat aliquam qui debitis facilis consequatur",post:"https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-5.webp",author:"Denis Peterson",posted:"Jan 30, 2022",profile:"https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-m-11.webp"},{category:"Entertainment",title:"Distinctio provident quibusdam numquam aperiam aut",post:"https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-6.webp",author:"Mika Lendon",posted:"Feb 14, 2022",profile:"https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-f-15.webp"}]}/>
    </div>
  )
}

export default Blogs
