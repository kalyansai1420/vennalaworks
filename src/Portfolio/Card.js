import React, { useState, useEffect } from 'react';
import './Card.css'
import { useHistory } from 'react-router-dom';

const Card = ({item}) => {

    const history = useHistory();    
    const portfolio_details = () =>{
        history.push("/portfolio/ProductDetails",{id:item.id,
            // image:item.image,
            // title:item.title,
            // location:item.location,
            // area:item.area,
            // content:item.content
        })
        console.log(item.id);
    }
    return (

        <div  className="card" onClick={() => portfolio_details(item.id)} > 
            <img src={item.image} alt={item.title} className="card__image"/>
            
            <div className="card__desc">
                <h4 className="card__title">{item.title}</h4>
                <h5> {item.location}</h5>
                <p>{item.area}</p>
                <button onClick={() => portfolio_details(item.id)} className="card__btn">Read More</button>
            </div>            
        </div>
    )
}

export default Card
