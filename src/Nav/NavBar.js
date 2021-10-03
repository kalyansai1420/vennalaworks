import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <svg width="134" height="42" viewBox="0 0 134 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.6 29.576L5.52 41H4.08L0 29.576H1.504L4.08 36.904C4.25067 37.3733 4.39467 37.816 4.512 38.232C4.62933 38.6373 4.72533 39.0267 4.8 39.4C4.87467 39.0267 4.97067 38.632 5.088 38.216C5.20533 37.8 5.34933 37.352 5.52 36.872L8.08 29.576H9.6ZM17.8498 41H11.4657V29.576H17.8498V30.84H12.9057V34.408H17.5617V35.656H12.9057V39.736H17.8498V41ZM29.7324 41H28.0524L21.9404 31.512H21.8764C21.8977 31.8853 21.9244 32.3493 21.9564 32.904C21.9884 33.4587 22.0044 34.0293 22.0044 34.616V41H20.6764V29.576H22.3404L28.4364 39.032H28.5004C28.4897 38.8613 28.4737 38.6053 28.4524 38.264C28.4417 37.9227 28.4257 37.5493 28.4044 37.144C28.3937 36.7387 28.3884 36.3653 28.3884 36.024V29.576H29.7324V41ZM42.2086 41H40.5286L34.4166 31.512H34.3526C34.374 31.8853 34.4006 32.3493 34.4326 32.904C34.4646 33.4587 34.4806 34.0293 34.4806 34.616V41H33.1526V29.576H34.8166L40.9126 39.032H40.9766C40.966 38.8613 40.95 38.6053 40.9286 38.264C40.918 37.9227 40.902 37.5493 40.8806 37.144C40.87 36.7387 40.8646 36.3653 40.8646 36.024V29.576H42.2086V41ZM52.0129 41H45.6289V29.576H52.0129V30.84H47.0689V34.408H51.7249V35.656H47.0689V39.736H52.0129V41ZM54.8395 41V29.576H56.2795V39.72H61.2715V41H54.8395ZM70.7181 41L69.3421 37.464H64.8141L63.4541 41H61.9981L66.4621 29.528H67.7581L72.2061 41H70.7181ZM67.6301 32.728C67.5981 32.6427 67.5448 32.488 67.4701 32.264C67.3955 32.04 67.3208 31.8107 67.2461 31.576C67.1821 31.3307 67.1288 31.144 67.0861 31.016C67.0115 31.3467 66.9261 31.672 66.8301 31.992C66.7341 32.3013 66.6541 32.5467 66.5901 32.728L65.2941 36.184H68.9101L67.6301 32.728ZM91.6851 29.576L88.6451 41H87.1891L84.9651 33.512C84.8798 33.2027 84.7945 32.8933 84.7091 32.584C84.6238 32.2747 84.5545 32.0027 84.5011 31.768C84.4478 31.5227 84.4105 31.352 84.3891 31.256C84.3785 31.3947 84.3198 31.6933 84.2131 32.152C84.1171 32.6 83.9945 33.0693 83.8451 33.56L81.6851 41H80.2291L77.2051 29.576H78.7091L80.4851 36.552C80.6131 37.0427 80.7198 37.5173 80.8051 37.976C80.9011 38.4347 80.9758 38.8667 81.0291 39.272C81.0825 38.856 81.1625 38.4027 81.2691 37.912C81.3758 37.4213 81.4985 36.9413 81.6371 36.472L83.6531 29.576H85.1411L87.2371 36.52C87.3865 37.0107 87.5145 37.5013 87.6211 37.992C87.7278 38.472 87.8078 38.8987 87.8611 39.272C87.9145 38.8773 87.9891 38.4507 88.0851 37.992C88.1811 37.5227 88.2931 37.0373 88.4211 36.536L90.1811 29.576H91.6851ZM103.572 35.272C103.572 36.456 103.369 37.4907 102.964 38.376C102.569 39.2507 101.983 39.9333 101.204 40.424C100.425 40.9147 99.4599 41.16 98.3079 41.16C97.1239 41.16 96.1372 40.9147 95.3479 40.424C94.5692 39.9333 93.9879 39.2453 93.6039 38.36C93.2199 37.4747 93.0279 36.44 93.0279 35.256C93.0279 34.0827 93.2199 33.0587 93.6039 32.184C93.9879 31.3093 94.5692 30.6267 95.3479 30.136C96.1372 29.6453 97.1292 29.4 98.3239 29.4C99.4652 29.4 100.425 29.6453 101.204 30.136C101.983 30.616 102.569 31.2987 102.964 32.184C103.369 33.0587 103.572 34.088 103.572 35.272ZM94.5479 35.272C94.5479 36.712 94.8519 37.848 95.4599 38.68C96.0679 39.5013 97.0172 39.912 98.3079 39.912C99.6092 39.912 100.559 39.5013 101.156 38.68C101.753 37.848 102.052 36.712 102.052 35.272C102.052 33.832 101.753 32.7067 101.156 31.896C100.559 31.0747 99.6145 30.664 98.3239 30.664C97.0332 30.664 96.0785 31.0747 95.4599 31.896C94.8519 32.7067 94.5479 33.832 94.5479 35.272ZM109.576 29.576C110.995 29.576 112.04 29.848 112.712 30.392C113.395 30.9253 113.736 31.736 113.736 32.824C113.736 33.432 113.624 33.9387 113.4 34.344C113.176 34.7493 112.888 35.0747 112.536 35.32C112.195 35.5547 111.832 35.7413 111.448 35.88L114.584 41H112.904L110.136 36.28H107.864V41H106.424V29.576H109.576ZM109.496 30.824H107.864V35.064H109.576C110.504 35.064 111.181 34.8827 111.608 34.52C112.035 34.1467 112.248 33.6027 112.248 32.888C112.248 32.1413 112.024 31.6133 111.576 31.304C111.128 30.984 110.435 30.824 109.496 30.824ZM125.049 41H123.353L119.305 35.544L118.137 36.568V41H116.697V29.576H118.137V35.208C118.457 34.8453 118.782 34.4827 119.113 34.12C119.444 33.7573 119.774 33.3947 120.105 33.032L123.193 29.576H124.873L120.345 34.552L125.049 41ZM133.403 37.944C133.403 38.9573 133.035 39.7467 132.299 40.312C131.563 40.8773 130.571 41.16 129.323 41.16C128.683 41.16 128.091 41.112 127.547 41.016C127.003 40.92 126.55 40.7867 126.187 40.616V39.24C126.571 39.4107 127.046 39.5653 127.611 39.704C128.187 39.8427 128.779 39.912 129.387 39.912C130.241 39.912 130.881 39.7467 131.307 39.416C131.745 39.0853 131.963 38.6373 131.963 38.072C131.963 37.6987 131.883 37.384 131.723 37.128C131.563 36.872 131.286 36.6373 130.891 36.424C130.507 36.2 129.969 35.9653 129.275 35.72C128.305 35.368 127.569 34.936 127.067 34.424C126.577 33.912 126.331 33.2133 126.331 32.328C126.331 31.72 126.486 31.2027 126.795 30.776C127.105 30.3387 127.531 30.0027 128.075 29.768C128.63 29.5333 129.265 29.416 129.979 29.416C130.609 29.416 131.185 29.4747 131.707 29.592C132.23 29.7093 132.705 29.864 133.131 30.056L132.683 31.288C132.289 31.1173 131.857 30.9733 131.387 30.856C130.929 30.7387 130.449 30.68 129.947 30.68C129.233 30.68 128.694 30.8347 128.331 31.144C127.969 31.4427 127.787 31.8427 127.787 32.344C127.787 32.728 127.867 33.048 128.027 33.304C128.187 33.56 128.449 33.7893 128.811 33.992C129.174 34.1947 129.665 34.4133 130.283 34.648C130.955 34.8933 131.521 35.16 131.979 35.448C132.449 35.7253 132.801 36.0613 133.035 36.456C133.281 36.8507 133.403 37.3467 133.403 37.944Z" fill="white"/>
          <path d="M58.64 6.4H63.96C64.24 6.4 64.38 6.54 64.38 6.82C64.38 7.1 64.24 7.24 63.96 7.24H62.28C61.9627 7.24 61.8693 7.38 62 7.66L67.012 23.844C67.0493 23.956 67.1053 24.012 67.18 24.012C67.2547 24.012 67.3107 23.956 67.348 23.844L72.136 6.82C72.2293 6.54 72.416 6.4 72.696 6.4C72.976 6.4 73.1627 6.54 73.256 6.82L78.016 23.844C78.0533 23.956 78.1093 24.012 78.184 24.012C78.2587 24.012 78.3147 23.956 78.352 23.844L83.364 7.66C83.5133 7.38 83.42 7.24 83.084 7.24H81.404C81.124 7.24 80.984 7.1 80.984 6.82C80.984 6.54 81.124 6.4 81.404 6.4H86.724C87.004 6.4 87.144 6.54 87.144 6.82C87.144 7.1 87.004 7.24 86.724 7.24H84.904C84.624 7.24 84.4373 7.38 84.344 7.66L78.716 25.86C78.6413 26.14 78.464 26.28 78.184 26.28C77.904 26.28 77.7267 26.14 77.652 25.86L72.864 8.78C72.8267 8.668 72.7613 8.612 72.668 8.612C72.5747 8.612 72.5093 8.668 72.472 8.78L67.712 25.86C67.6187 26.14 67.4413 26.28 67.18 26.28C66.9187 26.28 66.7413 26.14 66.648 25.86L61.02 7.66C60.9453 7.38 60.7587 7.24 60.46 7.24H58.64C58.36 7.24 58.22 7.1 58.22 6.82C58.22 6.54 58.36 6.4 58.64 6.4Z" fill="white"/>
          <path d="M62.64 6.4H67.96C68.24 6.4 68.38 6.54 68.38 6.82C68.38 7.1 68.24 7.24 67.96 7.24H66.28C65.9627 7.24 65.8693 7.38 66 7.66L72.468 24.46C72.5053 24.572 72.5613 24.628 72.636 24.628C72.7107 24.628 72.7667 24.572 72.804 24.46L79.272 7.66C79.4027 7.38 79.3093 7.24 78.992 7.24H77.312C77.032 7.24 76.892 7.1 76.892 6.82C76.892 6.54 77.032 6.4 77.312 6.4H82.632C82.912 6.4 83.052 6.54 83.052 6.82C83.052 7.1 82.912 7.24 82.632 7.24H80.812C80.588 7.24 80.4013 7.38 80.252 7.66L73.252 25.86C73.1773 26.14 72.972 26.28 72.636 26.28C72.3 26.28 72.0947 26.14 72.02 25.86L65.02 7.66C64.8707 7.38 64.684 7.24 64.46 7.24H62.64C62.36 7.24 62.22 7.1 62.22 6.82C62.22 6.54 62.36 6.4 62.64 6.4Z" fill="white"/>
          </svg>

            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/portfolio"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;