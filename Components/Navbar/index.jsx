import React ,{useState}from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div className="navbar-container">
            <div className="navbar-inner-wrapper">
            <div className="logo">
                <img src="/assets/Navbar/Ellipse 1.png" alt="" />
                <span>MetaReview</span>
            </div>
            <div className="menu-list">
                <ul>
                    <li>
                        Home
                    </li>
                 
                    <li>How that works</li>
                    <li>Blog</li>
                   
                    <li>Contact</li>
                </ul>
            </div>
            </div>
            <div className="navbar-mobile">
            <div className={open?`navbar-mobile-toggle-btn open`:'navbar-mobile-toggle-btn '} onClick={()=>open?setOpen(false):setOpen(true)}>
    <span></span>
    <span></span>

          </div>
          <div className="navbar-mobile-logo">
          <img src="/assets/Navbar/Ellipse 1.png" alt="" />
                <span>MetaReview</span>
            </div>
            </div>
        </div>
           {open?  <div className="navbar-mobile-outer-dropdown">
           <div className="mobile-inner-wrapper">
            <div className="navbar-mobile-tabs-container">    
            
                       <span>
                        Home
                        </span> 
                        <span>How that works</span>
                        <span>Blog</span>
                        <span>Contact</span>               
            </div>
           </div>
                
          </div>:""}
          </>
    )
}

export default Navbar;