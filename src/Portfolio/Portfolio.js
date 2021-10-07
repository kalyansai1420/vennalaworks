import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

import Card from'./Card'
import './Portfolio.css'
import Carousel from "react-elastic-carousel";
import CardPortSkeletonCard from './CardSkeletonCard';
import { Link } from 'react-router-dom';


const Portfolio = ({list}) => {
    //console.log(list);
      const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 },
      ];
    const [loading, setLoading] = useState(false);
    const [portcard, setPortcard] = useState([]);
    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setPortcard(list.items)
            setLoading(false);
        }, 0);
        return () => clearTimeout(timing);
    }, []);

     
    return (

        <div className="list">
            <h2 className="port-title"> Portfolio</h2>
            <div className="cards">
                {/* {loading && <CardPortSkeletonCard/> } */}
                {portcard.map((item,index)=>(
                <div>
                    {index <= 2 ? (<Card key={index}  item={item}/>):null}
                </div>
                // rey Naku GRE xam undi 12 lopu phone cahi Nenu bath ki Vellali
                ))
                }
            </div>
            <div class="port-btn">
                <Link to="/portfolio" class="btn"> See More</Link>
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
