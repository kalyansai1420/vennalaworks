import React from 'react'
import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton';
import './Home.css'
const HomeSkeletonCard = () => {
    return (
        
        <div className="home">
            <div className="home__left">
                <SkeletonTheme  color="#202020" highlightColor="#444">
                    <a href="https://www.facebook.com" target="_blank">
                        <Skeleton count={1} height={20} width={20} />
                    </a>
                </SkeletonTheme>
                <br/>
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <a href="https://www.facebook.com" target="_blank">

                        <Skeleton count={1} height={20} width={20} />

                    </a>
                </SkeletonTheme>
                <br />
                <SkeletonTheme  color="#202020" highlightColor="#444">
                    <a href="https://www.facebook.com" target="_blank">
                   
                        <Skeleton count={1} height={20} width={20} />
                
                    </a>
                </SkeletonTheme>

            </div>
            <div className="home__right">
               
                <SkeletonTheme  color="#202020" highlightColor="#444">
                    <h1>
                        <Skeleton className="ske_home_h1" count={1} height={45} width={700} />
                    </h1>
                </SkeletonTheme>
                
                {/* <SkeletonTheme  color="#202020" highlightColor="#444">
                    <h3>
                        <Skeleton count={1} height={20} width={500} />
                    </h3>
                </SkeletonTheme> */}
            </div>
        </div>
    )
}

export default HomeSkeletonCard
