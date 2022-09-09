import React from 'react'

export default function FooterItem({heading,items=[]}) {
  return (
    <div className="footer-item">
        <div className="heading">
            {heading}
        </div>
        <div className="body">
             {
                items.map((value,index)=>{
                    return(
                        <div className="item" key={index}>{value}</div>
                    )
                })
             }
            
        </div>
    </div>
  )
}

