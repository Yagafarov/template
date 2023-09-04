import React from 'react'
import { Button } from 'react-bootstrap'

import homeImg from '../assets/home.png'
import './pageStyle.css'
const Home = () => {
  return (
    <div className="home">
      <div className="row">
        <div className="col-sm" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h3>Stupid documentation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sunt ea nesciunt maiores necessitatibus, sit quo, qui nulla quae odio tenetur repudiandae repellendus? Sit amet molestiae placeat dicta qui deserunt!
            </p>
            <Button variant='primary' style={{marginRight:'10px'}}>Boshlash</Button>
            <Button variant='outline-primary'>Fikr qoldirish</Button>
          </div>
        </div>
        <div className="col-sm">
          <img src={homeImg} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default Home