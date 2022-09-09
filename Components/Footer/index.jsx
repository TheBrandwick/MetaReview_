import React from 'react'
import FooterItem from './FooterItem'

export default function Footer() {
  return (
    <div id="footer">
        <div className="footer-wrapper">
        <div className="footer-item footer-item-1">
        <div className="heading">
        <img src="/footer.svg" alt="" />
        </div>
        <div className="body">
            
                        <div className="item">Instagram</div>
                        <div className="item">Facebook</div>
                        <div className="item">LinkedIn</div>
                        <div className="item extra-margin">+ 1805 73 78 00</div>
                        <div className="item">info@twilo.com</div>
            
            
        </div>
    </div>
     <FooterItem heading={'Homepages'} items={['Main Home','About','Team Member','Partners','Services']}/>
     <FooterItem heading={'Services'} items={['Services','Team Member','Partners','About','FAQ']}/>
     <FooterItem heading={'Company'} items={['Team Member','Our Team','Services','Partners','FAQ']}/>
     <FooterItem heading={'Resources'} items={['About','FAQ','Partners Support','Services']}/>
        </div>
    </div>
  )
}
