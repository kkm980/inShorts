import "./NewsBox.css"
import NewsItems from "./NewsItems"

import { Container } from '@mui/material'
import React from 'react'

function NewsBox({catg, newsArr, newsNumb}) {
    // console.log(newsArr);
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
               {newsArr.map((newsItem)=>(
                        newsItem.map(el=>(
                            <NewsItems key={el.title} newsItem={el} newsNumb={newsNumb}/>
                        ))
                        
                
                   
               ))}
               

            </Container>
        </div>
    )
}

export default NewsBox;
