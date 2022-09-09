import React from 'react'

const CtaSection = () => {
    return (
        <div className="CtaSection-container">
            <div className="CtaSection-wrapper">
                <div className="left-side-container">
                    <img src="/assets/Cta/IMAGE (11).png" alt="cta-img" />
                </div>
                <div className="right-side-container">
                    <div className="heading">Start for free today</div>
                    <div className="desc">Start using our services with all the advantages for 3 months for free. Our support will help with any questions. Start your development with us.</div>
                    <div className="buttons-wrapper">
                        <div className="contact-button">Contact Us</div>
                        <div className="Pricing-button">View Pricing</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;