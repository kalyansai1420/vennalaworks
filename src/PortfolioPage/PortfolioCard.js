import React from 'react'
import './PortfolioCard.css'
import { useHistory } from 'react-router-dom';


const PortfolioCard = ({item}) => {
    const history = useHistory();
    const portfolio_details = () =>{
        history.push("/portfolio/ProductDetails", {
            id: item.id,
        })
    }
    return (
        <div className="portfoliocard ske-portfoliocard" onClick={() => history.push("/portfolio/ProductDetails", { id: item.id })}>
            <img src={item.image} alt={item.title} className="portcard__image"/>
            <div className="portcard__desc hide-text">
                <h4>{item.projecttitle}</h4>
                <h4>{item.worktype}</h4>
            </div>
        </div>
    )
}

export default PortfolioCard
