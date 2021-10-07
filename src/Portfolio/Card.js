import React, { useState, useEffect } from 'react';
import './Card.css'
import { useHistory } from 'react-router-dom';

const Card = ({item}) => {

    const history = useHistory();    
    const portfolio_details = () =>{
        history.push("/portfolio/ProductDetails", {
            id: item.id,
        })
    }
    return (

        <div  className="card" onClick={() => portfolio_details(item.id)} > 
            <img src={item.image} alt={item.title} className="card__image"/>
            <p>
                
            </p>
            <div className="card__desc">
                <h4 className="card__title">{item.projecttitle}</h4>
                <p>{item.locationcard} : { item.areacard}</p>
                <button onClick={() => portfolio_details(item.id)} className="card__btn">Know More</button>
            </div>            
        </div>
    )
}

export default Card
