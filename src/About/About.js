import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
function About() {
    return (
        <div className="about">
            <div className="about__left">
                <h2 className="about-title"> About Us</h2>
                <p className="para-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati, sint incidunt provident molestiae doloremque voluptatem pariatur unde vel cumque ullam a vero modi tempora saepe placeat aut nemo nostrum.
                </p>
                <div class="hero-btn">
                    <Link to="/contact" class="btn"> Contact Us</Link>
                </div>
                
            </div>
            <div className="about__right">

            </div>
            
        </div>
    )
}

export default About
