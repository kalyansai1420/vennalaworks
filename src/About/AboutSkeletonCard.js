import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './About.css'
const AboutSkeletonCard = () => {
    return (
        <div className="about">
            <div className="about__left">
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <h2 className="about-title">
                        <Skeleton count={1} height={50} width={150} />
                    </h2>
                   
                </SkeletonTheme>
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <p className="para-content">
                        <Skeleton count={1} height={250} width={450} />

                    </p>
                </SkeletonTheme>

                
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <div class="hero-btn">
                        <Skeleton count={1} height={40} width={170} />

                        {/* <a href="#" class="btn">

                        </a> */}
                    </div>

                    </SkeletonTheme>


            </div>
            <div className="about__right">

            </div>

        </div>
    )
}

export default AboutSkeletonCard
