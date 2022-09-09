import React from 'react'

const Faq = () => {
    return (
        <div className="faq-container">
            <div className="faq-heading">
                <div className="title">The most common questions</div>
                <div className="desc">It should not be forgotten, however, that the new model of organizational activity allows you to perform important tasks in the development of new proposals. The task of the organization, in particular the beginning of daily work on the formation of a position, plays an important role in shaping the forms of development.</div>
            </div>

            {/* card */}
            <div className="faq-card-grid">
                <div className="card">How does SAASworld make money?</div>
                <div className="card">How does SAASworld make money?</div>
                <div className="card">What projects can be done on SAASworld?</div>
                <div className="card">What’s the difference between finding clients online, versus locally?</div>
                <div className="card">What is the Top Rated program?</div>
                <div className="card">Can I sell scripts, etc. written by others?</div>
            </div>
        </div>
    )
}

export default Faq; 