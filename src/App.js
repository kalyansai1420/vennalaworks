// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SkeletonCard from './SkeletonCard'
import About from './About/About';
import './App.css';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Data from './Data'
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import HomeSkeletonCard from './Home/HomeSkeletonCard';
import NavBar from './Nav/NavBar';
import ProductDetails from './ProductDetails/ProductDetails';
import Portfoliopage from './PortfolioPage/Portfoliopage';
import AboutSkeletonCard from './About/AboutSkeletonCard';
import PortfolioSkeletonCard from './Portfolio/PortfolioSkeletonCard';
import ScrollToTop from './ScrollToTop';
import Copyright from './Footer/Copyright';
import ContactPage from './ContactPage/ContactPage';

const App = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [homeloading, setHomeloading] = useState(false);
  useEffect(() => {
    setHomeloading(true);
    const timing = setTimeout(() => {
      setPortfolio(Data);
      setHomeloading(false);
    }, 3500);
    return () => clearTimeout(timing);
  }, []);

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <NavBar />
        <Switch>
          
          <Route path="/portfolio/ProductDetails">
            <ProductDetails />
          </Route>
          <Route path="/portfolio">
            {homeloading && <SkeletonCard />}
            {!homeloading && portfolio.map((list, index) => {
              return (
                <div key={index}>
                  <Portfoliopage list={list} />
                </div>
              );
            })}
          </Route>
          <Route path="/contact">
            <ContactPage/>
          </Route>
          <Route path="/">
            {homeloading && <HomeSkeletonCard />}
            {!homeloading && <Home />}

            {homeloading && <AboutSkeletonCard />}
            {!homeloading && <About />}

            {homeloading && <PortfolioSkeletonCard />}
            {!homeloading && portfolio.map((list, index) => {
              return (
                <div key={index}>
                  <Portfolio list={list} />
                </div>
              );
            })}
            <Contact />
          </Route>


        </Switch>
        <Footer />
      </Router>
      
      <Copyright/>



    </div>
  );
}

export default App;
