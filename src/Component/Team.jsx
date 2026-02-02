import React from 'react'
import Teamdetails from './Teamdetails'

const Team = () => {
    return (
        <div className=' mt-5' style={{ background: "#f9f9f9" }}>
            <div className="container py-5">

                <p className="text-muted">TEAM</p>
                <h4>CHECK OUR TEAM</h4>
                <Teamdetails value={[{ name: "Walter White", position: "Chief Executive Officer", about: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow", photo: "https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-m-7.webp" }, { name: "Sarah Jhonson", position: "Product Manager", about: "Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut", photo: "https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-f-8.webp" }, { name: "William Anderson", position: "CTO", about: "Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui", photo: "https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-m-6.webp" }, { name: "Amanda Jepson", position: "Accountant", about: "Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur", photo: "https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-f-4.webp" }, { name: "Brian Doe", position: "Marketing", about: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit", photo: "https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-m-12.webp" }, { name: "Josepha Palas", position: "Operation", about: "Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel", photo: "https://bootstrapmade.com/content/demo/Blogy/assets/img/person/person-f-9.webp" }]} />
            </div>
        </div>
    )
}

export default Team
