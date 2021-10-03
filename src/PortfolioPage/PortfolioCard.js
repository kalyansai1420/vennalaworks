import React from 'react'
import './PortfolioCard.css'
import { useHistory } from 'react-router-dom';


const PortfolioCard = ({item}) => {
    const history = useHistory();



    const portfolio_details = () =>{
        history.push("/portfolio/ProductDetails",{id:item.id,
            //image:item.image, // No Need 
            //title:item.title, // No Need 
            //location:item.location, // No Need 
            //area:item.area, // No Need 
            //content:item.content, // No Need 
            //moreImages:item.moreImages // No Need 


        })
    }
    return (
        //  <div className="portfoliocard" onClick={() => portfolio_details(item.id)} > 
        <div className="portfoliocard" onClick={() => history.push("/portfolio/ProductDetails", { id: item.id })}>
            <img src={item.image} alt={item.title} className="portcard__image"/>
            <div className="portcard__desc">
                <h4>{item.title}</h4>
                <h5>{item.location}</h5>
            </div>
        </div>
    )
}

export default PortfolioCard
