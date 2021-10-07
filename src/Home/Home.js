import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';

import './Home.css'
function Home() {
    return (
        <div className="home">
            <div className="home__left">
                <a href="https://www.facebook.com" target="_blank">
                    <InstagramIcon fontSize="large"></InstagramIcon>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                    <GoogleIcon fontSize="large"></GoogleIcon>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                    <FacebookIcon fontSize="large"></FacebookIcon>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                    <PhoneIcon fontSize="large"></PhoneIcon>
                </a>
            </div>
            <div className="home__right">
                <h1>VENNELA WORKS</h1>
                {/* <h3>We make your space better</h3> */}
            </div>
        </div>
    )
}

export default Home
