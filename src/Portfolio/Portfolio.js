import React, { useState,useRef } from 'react';
import Card from'./Card'
import './Portfolio.css'
import Carousel from "react-elastic-carousel";


const Portfolio = ({list}) => {
    //console.log(list);
      const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 },
      ];
    

     
    return (

        <div className="list">
            <h2 className="title"> Portfolio</h2>
            <div className="cards">
                {list.items.map((item,index)=>(
                <div>
                    {index <= 2 ? (<Card key={index}  item={item}/>):null}
                </div>
                // rey Naku GRE xam undi 12 lopu phone cahi Nenu bath ki Vellali
                ))
                }
            </div>
            <div class="port-btn">
                <a href="/portfolio" class="btn"> See More</a>
            </div>
            
        </div>
    )
}

export default Portfolio



 {/* <Carousel breakPoints={breakPoints} 
                    enableAutoPlay
                    autoPlaySpeed={1500} // same time
                    showArrows={false}
            > */}
             {/* </Carousel> */}
