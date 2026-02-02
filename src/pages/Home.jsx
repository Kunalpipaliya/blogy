import React from 'react'
import Navbar from '../Component/Navbar';
import Navigationbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import Latestpost from '../Component/Latestpost';
import Postsection from '../Component/Postsection';
import Categorysection from '../Component/Categorysection';
import Banner from '../Component/Banner';
const Home = () => {
  return (
    <div>
      {/* <Navigationbar/> */}
      <Hero value={[{description:"Ut enim ad minim veniam, quis nostrud exercitation",category:"career", date:"Apr.14th,2025",photo:"https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-9.webp"},{description:"Ut enim ad minim veniam, quis nostrud exercitation",category:"career", date:"Apr.14th,2025",photo:"https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-9.webp"},{description:"Ut enim ad minim veniam, quis nostrud exercitation",category:"career", date:"Apr.14th,2025",photo:"https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-9.webp"}]}/>
      <Postsection/>
      <Categorysection/>
      <Banner/>
      <div className="mx-5 my-5">

      <p className="text-muted">LATEST POSTS</p>
            <h1>CHECK OUR LATEST POSTS</h1>
      </div>
      <Latestpost/>
    </div>
  )
}

export default Home
