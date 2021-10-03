import React from 'react'
import Skeleton from 'react-loading-skeleton';

const SkeletonCard = () => {
    return (
        <div className="card">
            <Skeleton height={40} width={500}/>
            
        </div>
    )
}

export default SkeletonCard
