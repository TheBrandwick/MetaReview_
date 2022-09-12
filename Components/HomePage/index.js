import React from 'react'
import Navbar from '../Navbar';

const HomePage = () => {
    return (
        <>
            <div className="homePage-container" >
                <Navbar />
                <div className="hompage-wrapper">
                    <div className="title">First On-Chain Survey Platform that rewards user</div>
                    <div className="desc">Make your feedback forms more secure and distribute rewards directly to users</div>
                    <a href='https://app.metareview.vercel.app/' rel="noreferrer" target="_blank"><div className="button">Get Started</div></a>

                    <div className="our-use-cases-wrapper">
                        <div className="title"></div>
                        <div className="cases-list">
                            {/* <div className="">Company Feedback Forms</div>
                            <div className="">Products Reviews</div>
                            <div className="">Freelance work</div> */}
                        </div>
                    </div>

                </div>
            </div>
            <div className="home-bottom-img">
                <img src="/assets/Homepage/IMAGE.png" alt="" />

            </div>
        </>
    )
}

export default HomePage;