import React from 'react'
import Postcards from './Postcards'

const Postsection = () => {
    return (
        <div className='mx-5 my-5'>

            <p className="text-muted">FEATURED POSTS</p>
            <h1>CHECK OUR FEATURED POSTS</h1>
            <Postcards value={[{author:"Emma Devis",date:"Jan 27, 2025",photo:"https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-portrait-5.webp",comment:"6",title:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",content:"Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi."},{author:"Emma Devis",date:"Jan 27, 2025",photo:"https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-portrait-1.webp",comment:"6",title:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",content:"Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi."},{author:"Emma Devis",date:"Jan 27, 2025",photo:"https://bootstrapmade.com/content/demo/Blogy/assets/img/blog/blog-post-portrait-3.webp",comment:"6",title:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",content:"Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi."}]}/>
        </div>
    )
}

export default Postsection
