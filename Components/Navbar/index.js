import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="logo">
                <img src="/assets/Navbar/Ellipse 1.png" alt="" />
                <span>MetaReview</span>
            </div>
            <div className="menu-list">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>Pages</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;