import React from 'react'
import "./NewsItems.css"


function NewsItems({catg, newsItem, newsNumb}) {
    console.log(newsNumb);
    console.log("getsetgo", newsItem);
    return (
        <div className="card">
            <img className="newsImage" alt="" src={newsItem.urlToImage && newsItem.urlToImage}/>
            <div className="newsTexts">
             <span className="newsTitle">
             {newsItem.title}
             </span>
               <br/>{" "}
             <span className="author">
               <a target="_blank" rel="noreferrer" href={newsItem.url}>{newsItem.url}
               <b>short</b>
               </a> by {newsItem.author?newsItem.author:"unknown"}
             </span>
            </div>
            <div className="lowerNewsText">
              <div className="description">
                {newsItem.description}
              </div>
              <span className="readmore">
                read more at{" "}
                <a className="source" rel="noreferrer" href={newsItem.url} target="_blank">
                 <b>{newsItem.source.name}</b>
                </a>
              </span>
            </div>
            
        </div>
    )
}

export default NewsItems
