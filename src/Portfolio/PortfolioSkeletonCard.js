import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const PortSkeletonCard = () => {
    return (
        <div className="list">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <h2 className="port-title">
                    <Skeleton count={1} height={50} width={150} />
                </h2>
            </SkeletonTheme>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <div className="cards">
                    <Skeleton style={{ marginLeft:50,marginTop:50 }} count={3} height={250} width={400} />
                </div>
            </SkeletonTheme>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <div className="port-btn">
                    <Skeleton count={1} height={50} width={250} />
                </div>
            </SkeletonTheme>
            
            
        </div>
    )
}

export default PortSkeletonCard
