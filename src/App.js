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

const App = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(false);
  const [homeloading, setHomeloading] = useState(false);
  useEffect(() => {
    setHomeloading(true);
    setLoading(true);
    const timing = setTimeout(() => {
      setPortfolio(Data);
      setHomeloading(false);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timing);
  }, []);
  // console.log(portfolio);

  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/portfolio/ProductDetails">
            <ProductDetails />
          </Route>
          <Route path="/portfolio">
            {loading && <SkeletonCard />}
            {!loading && portfolio.map((list, index) => {
              return (
                <div key={index}>
                  <Portfoliopage list={list} />
                </div>
              );
            })}
          </Route>
          <Route path="/">
            {homeloading && <HomeSkeletonCard />}
            {!homeloading && <Home />}
            <About />
            {loading && <SkeletonCard />}
            {!loading && portfolio.map((list, index) => {
              return (
                <div key={index}>
                  <Portfolio list={list} />
                </div>
              );
            })}
            <Contact />
          </Route>


        </Switch>
      </Router>
      <Footer />



    </div>
  );
}

export default App;
