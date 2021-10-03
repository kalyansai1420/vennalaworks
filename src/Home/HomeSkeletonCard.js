import React from 'react'
import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';

const HomeSkeletonCard = () => {
    return (
        // <div className="card">
        //     <Skeleton height={1000} width={1000}/>
            
        // </div>
        <div className="home">
            <div className="home__left">
                <a href="https://www.facebook.com" target="_blank">
                <InstagramIcon></InstagramIcon>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                <GoogleIcon></GoogleIcon>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                <FacebookIcon></FacebookIcon>
                </a>
            </div>
            <div className="home__right">
               
                <SkeletonTheme  color="#202020" highlightColor="#444">
                    <h1>
                        <Skeleton count={1} height={45} width={700} />
                    </h1>
                </SkeletonTheme>
                
                <SkeletonTheme  color="#202020" highlightColor="#444">
                    <h3>
                        <Skeleton count={1} height={20} width={500} />
                    </h3>
                </SkeletonTheme>
            </div>
        </div>
    )
}

export default HomeSkeletonCard
