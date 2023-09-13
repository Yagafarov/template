import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import imgHome from '../assets/home.png'


const About = () => {
    return (
        <div>
            <figure class="text-center">
                <blockquote class="blockquote">
                    <h4>Biz haqimizda umumiy ma'lumotga ega bo'lish uchun</h4>
                </blockquote>
                <figcaption class="blockquote-footer">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident deleniti nobis numquam nihil quae, soluta eius omnis ipsa tempore delectus.
                </figcaption>
                <div> 
                        <Image  src={imgHome} className="img-fluid" />
                    <div  className="text-left bg-dark text-light">
                        <h4>Lorem, ipsum dolor.</h4>
                        <p className="text-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa reprehenderit itaque sint dolorum! Distinctio nihil culpa vero? Officia quasi expedita voluptate exercitationem. Totam repellat eligendi veniam unde ipsum debitis!
                        </p>
                    </div>
                </div>
            </figure>
        </div>
    )
}

export default About