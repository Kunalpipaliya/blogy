import React from 'react'
import Team from '../Component/Team'
import { Row, Col } from 'react-bootstrap'
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Features from '../Component/Features';
const About = () => {
  return (
    <div>
      <h1 className="text-center mt-5 " style={{ color: "#334456" }}>About</h1>
      <div className="container">
        <h5 className="text-center fw-normal w-75 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos accusantium deleniti autem deserunt nobis quae qui soluta distinctio enim!</h5>
        <Row className={'mt-5'}>
          <Col md='6'>
            <b style={{ background: "color-mix(in srgb, #f75815, transparent 90%)", textTransform: "capitalize" }} className='px-4 py-2 rounded-pill fw-semibold d-inline-block '><InfoOutlineIcon style={{ fontSize: '15px' }}></InfoOutlineIcon> <span>About</span> </b>
            <h2 className='mt-2'>Nemo enim ipsam voluptatem quia voluptas aspernatur</h2>
            <p className='mt-3 fs-5'>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
          </Col>
          <Col md='6'>
            <p className="fs-5">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            <p className="fs-5 mt-3">Amet eos ut. Officiis soluta ab id dolor non sint. Corporis omnis consequatur quisquam ex consequuntur quo omnis. Quo eligendi cum. Amet mollitia qui quidem dolores praesentium quasi ut et.</p>
          </Col>
        </Row>
        <br />
        <br />
        <Features/>
        <div className='img-container mt-5'>

          <div className="play-btn" ><PlayArrowIcon /></div>
          <img src="https://bootstrapmade.com/content/demo/Blogy/assets/img/about/about-wide-1.webp" alt="" width={'100%'} className='rounded-4' />
        </div>
      </div>

      <Team />
    </div>
  )
}

export default About
