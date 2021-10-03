import React, { useState,useEffect} from 'react'
import './ProductDetails.css'
import {useLocation} from "react-router-dom";
import Data from '../Data';
import '../images.json';
import ImageGallery from 'react-image-gallery';
import Carousel from 'react-elastic-carousel';




const ProductDetails = (item) => {
  const loc = useLocation();
  const iD = loc.state.id;
  const data = Data[0].items[iD]
  const breakPoints1 = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];
  const breakPoints2 = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];


  return (< div className="productdetails" >
    <div className="prod" >
      <div className="prod__left" >
        <div className="img-box" >
          <img src={data.image} alt={data.title} />
        </div >
      </div>
      <div className="prod__right" >
        <h2 > Location: {data.location} </h2>
        <p > Area: {data.area} </p>
      </div >
    </div>
    <div className="prod__content" >
      <h3 > Description </h3> <p> { data.content}</p>
    </div>
  
    <Carousel className="img_gallery_1" breakPoints={breakPoints1} enableAutoPlay
      autoPlaySpeed={2500} showArrows={false} pagination={false} >
    {data.images.map((res, index) => {
      return (
        
          <img className="img_1" key={index} src={res.bannerImg1} alt={index} />
        
          )
        
    })}
    </Carousel>
    <Carousel className="img_gallery_2" breakPoints={breakPoints2} enableAutoPlay
      autoPlaySpeed={2500}>
      {data.images.map((res, index) => {
        return (

          <img className="img_2" key={index} src={res.bannerImg1} alt={index} />

        )

      })}
    </Carousel>


  </div>
  )
}

export default ProductDetails