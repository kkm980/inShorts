import React from 'react'
import Drawer from './Drawer'
import "./Navbar.css"
function Navbar({setCatg}) {
    return (
        <div className="nav">
            <div><Drawer setCatg={setCatg}/></div>
            <div className="icon">
              <img style={{cursor:"pointer",height:"10vh",maxHeight:"70px"}}  src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo"/>
            </div>
        </div>
    )
}

export default Navbar
