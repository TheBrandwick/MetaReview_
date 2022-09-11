import React from 'react'
import InFoCard from './InFoCard'

const InfoSection = () => {
    return (
        <div className="InfoSection-container">
            <div className="inFo-section-wrapper">
                <div className="left-side-container">
                    <img src="/assets/InfoSection/IMAGE (9).png" alt="InfoSection-img" />
                </div>
                <div className="right-side-container">
                    <div className="heading">Create Your Survey</div>
                    <div className="desc">Create Your Survey and feedback forms , Stake Coins or NFTs to be distributed between the users who applied  <br />Your users data will be stored on chain and only you as survey creator can have access   </div>
                    <div className="button">Contact Us
                        <div className="btn-bottom-line"></div>
                    </div>
                </div>
            </div>
            {/* 2 sub-section start */}
            <div className="inFo-section-wrapper-2">
                <div className="left-side-container">
                    <div className="heading">Earn Nfts and Solana</div>
                    <div className="desc">Users will get NFTs or Solana for applying for survey directly on there connected wallet , They need to lock  5 solana for minimum 7 days to participate  </div>
                    <div className="button">Contact Us
                        <div className="btn-bottom-line"></div>
                    </div>
                </div>
                <div className="right-side-container">
                    <img src="/assets/InfoSection/IMAGE (10).png" alt="InfoSection-img" />

                </div>
            </div>
            {/* <InFoCard /> */}
        </div>
    )
}

export default InfoSection