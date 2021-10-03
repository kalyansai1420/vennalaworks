import React from 'react'
import PortfolioCard from './PortfolioCard'
import './Portfoliopage.css'
const Portfoliopage = ({list}) => {
    console.log(list);
    return (
        
        <div className="portfoliopage">
            <h2 className="port__title">Our Portfolio</h2>
            <div className="port__cards">
                {list.items.map((item,index)=>(
                <PortfolioCard key={index} item={item}/>
                ))
                }
            </div>
            {/* <div class="port-btn">
                <a href="/portfolio" class="btn"> See More</a>
            </div>     */}
        </div>
    )
}

export default Portfoliopage
