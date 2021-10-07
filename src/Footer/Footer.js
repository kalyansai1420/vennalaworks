import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import './Footer.css'
const Footer = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <div className="footer">
            <div className="footer__left">
                <svg width="75" height="75" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.64 0.399999H5.96C6.24 0.399999 6.38 0.539999 6.38 0.819998C6.38 1.1 6.24 1.24 5.96 1.24H4.28C3.96267 1.24 3.86933 1.38 4 1.66L9.012 17.844C9.04933 17.956 9.10533 18.012 9.18 18.012C9.25467 18.012 9.31067 17.956 9.348 17.844L14.136 0.819998C14.2293 0.539999 14.416 0.399999 14.696 0.399999C14.976 0.399999 15.1627 0.539999 15.256 0.819998L20.016 17.844C20.0533 17.956 20.1093 18.012 20.184 18.012C20.2587 18.012 20.3147 17.956 20.352 17.844L25.364 1.66C25.5133 1.38 25.42 1.24 25.084 1.24H23.404C23.124 1.24 22.984 1.1 22.984 0.819998C22.984 0.539999 23.124 0.399999 23.404 0.399999H28.724C29.004 0.399999 29.144 0.539999 29.144 0.819998C29.144 1.1 29.004 1.24 28.724 1.24H26.904C26.624 1.24 26.4373 1.38 26.344 1.66L20.716 19.86C20.6413 20.14 20.464 20.28 20.184 20.28C19.904 20.28 19.7267 20.14 19.652 19.86L14.864 2.78C14.8267 2.668 14.7613 2.612 14.668 2.612C14.5747 2.612 14.5093 2.668 14.472 2.78L9.712 19.86C9.61867 20.14 9.44133 20.28 9.18 20.28C8.91867 20.28 8.74133 20.14 8.648 19.86L3.02 1.66C2.94533 1.38 2.75867 1.24 2.46 1.24H0.64C0.36 1.24 0.22 1.1 0.22 0.819998C0.22 0.539999 0.36 0.399999 0.64 0.399999Z" fill="white" />
                    <path d="M4.64 0.399999H9.96C10.24 0.399999 10.38 0.539999 10.38 0.819998C10.38 1.1 10.24 1.24 9.96 1.24H8.28C7.96267 1.24 7.86933 1.38 8 1.66L14.468 18.46C14.5053 18.572 14.5613 18.628 14.636 18.628C14.7107 18.628 14.7667 18.572 14.804 18.46L21.272 1.66C21.4027 1.38 21.3093 1.24 20.992 1.24H19.312C19.032 1.24 18.892 1.1 18.892 0.819998C18.892 0.539999 19.032 0.399999 19.312 0.399999H24.632C24.912 0.399999 25.052 0.539999 25.052 0.819998C25.052 1.1 24.912 1.24 24.632 1.24H22.812C22.588 1.24 22.4013 1.38 22.252 1.66L15.252 19.86C15.1773 20.14 14.972 20.28 14.636 20.28C14.3 20.28 14.0947 20.14 14.02 19.86L7.02 1.66C6.87067 1.38 6.684 1.24 6.46 1.24H4.64C4.36 1.24 4.22 1.1 4.22 0.819998C4.22 0.539999 4.36 0.399999 4.64 0.399999Z" fill="white" />
                </svg>           </div>
            <div className="footer__middle">
             
                <li>
                    <NavLink
                        exact
                        to="/"
                        onClick={handleClick}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/portfolio"
                        onClick={handleClick}
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/contact"
                        onClick={handleClick}
                    >
                        Contact Us
                    </NavLink>
                </li>
                    
               
            </div>
            <div className="footer__right">
                <div className="footer__right__title">
                    <h2>Social Media</h2>
                </div>
                <div className="footer__right__socialicons">
                    <a href="https://www.facebook.com" target="_blank">
                    <InstagramIcon
                    fontSize="large"></InstagramIcon>
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                    <GoogleIcon
                    fontSize="large"></GoogleIcon>
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                    <FacebookIcon fontSize="large"></FacebookIcon>
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                        <PhoneIcon fontSize="large"></PhoneIcon>
                    </a>
                </div>
            </div>

        </div>
        
    )
}

export default Footer
