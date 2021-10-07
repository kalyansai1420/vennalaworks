import React, { useState,useEffect} from 'react'
import './ProductDetails.css'
import {useLocation} from "react-router-dom";
import Data from '../Data';
import '../images.json';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';




const ProductDetails = (item) => {
  const loc = useLocation();
  const iD = loc.state.id;
  const data = Data[0].items[iD]
  const [des, setDes] = useState('');

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
  useEffect(() => {
    const desData = data.content.split('<br/>').map((t) => {
      return (
        <text>
          {t}
          <br />
        </text>
      );
    });
    setDes(desData);
  }, [data.content]);


  return (< div className="productdetails" >
    <div className="prod__title">
      <h2>{ data.title}</h2>
    </div>
    <div className="prod" >
      <div className="prod__left" >
        <div className="img-box" >
          <img src={data.image} alt={data.title} />
        </div >
      </div>
      <div className="prod__right" >
        <h2>{ data.owner}</h2>
        <h2 > Location: {data.location} </h2>
        <h2 > Area: {data.area} </h2>
        <h2> { data.date}</h2>
      </div >
    </div>
    <div className="prod__content" >
      <h2 > Description </h2>
      <p> {des}</p>
    </div>
  
    <Carousel className="img_gallery_1"
      
      hasIndexBoard={false}
      style={{
        backgroundColor: "black",

      }}
    >
        {
          data.images.map((res, index) => {
            return (
              <img className="img_1" key={index} src={res.bannerImg1} alt={index} />
            )
          })
        }
    </Carousel>
   


  </div>
  )
}

export default ProductDetails