import "./NewsBox.css"


import { Container } from '@mui/material'
import React from 'react'

function NewsBox() {
    return (
        <div>
            <Container maxWidth="md">
               <div className="banner">
                  <span className="_bannerText">
                     For the best experience use inshorts app on your smartphone
                  </span>
                  <img alt="" src="https://assets.inshorts.com/website_assets/images/appstore.png"/>
                  <img alt="" src="https://assets.inshorts.com/website_assets/images/playstore.png"/>
               </div>
            </Container>
        </div>
    )
}

export default NewsBox;
