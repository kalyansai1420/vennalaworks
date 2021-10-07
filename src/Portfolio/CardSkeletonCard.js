import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CardPortSkeletonCard = () => {
    return (
        <div className="card">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <img className="card__image">
                    <Skeleton count={1} height={50} width={200} />
                </img>
            </SkeletonTheme>
            
            
        </div>
    )
}

export default CardPortSkeletonCard
