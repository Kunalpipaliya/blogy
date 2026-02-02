import React from 'react'
import Categories from './Categories'
import Categorycontent from './Categorycontent'
import Latestpost from './Latestpost'

const Categorysection = () => {
    return (
        <div className='mx-5 my-5'>
            <p className="text-muted">CATEGORY SECTION</p>
            <h1>CATEGORY SECTION</h1>
            <Categories value={[{ category: "Health", author: "William G.", date: "28 April 2024", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem", photo: "https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-6.webp", profile: "https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-f-13.webp" }, { category: "Education", author: "Emma D", date: "30 May 2024", desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis", photo: "https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-7.webp", profile: "https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-m-10.webp" }, { category: "Gaming", author: "James F.", date: "3 June 2024", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit", photo: "https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-5.webp", profile: "https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-f-14.webp" }]} />
        </div>
    )
}

export default Categorysection
