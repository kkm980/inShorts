import { IconButton } from '@mui/material'
import React from 'react'
import "./Footer.css"

import github from "../../Icons/github.gif";
import linkedin from "../../Icons/linkedin.gif";
import portfolio from "../../Icons/portfolio.gif";
import whatsapp from "../../Icons/whatsapp.gif";


function Footer() {
    return (
        <div className="footer">
            <div>
              <span className="footer_text">Inshorts clone | no copyright, feel free to learn. Any doubt? ping me  <a href="https://bit.ly/3GMtkDO" target="_blank" rel="noreferrer"> <img height="22px" alt="" src={whatsapp}/></a></span>
                <div className="contact_options">
                    <p className="contact_text">Find more projects from the house-</p>
                    <div className="icons_group">
                        <IconButton>
                            <a href="https://github.com/kkm980" rel="noreferrer" target="_blank"><img height="30px" alt="" src={github} /></a>
                        </IconButton>
                        <IconButton>
                            <a href="https://portfolio-kkrishna.vercel.app/" rel="noreferrer" target="_blank"><img height="30px" alt="" src={portfolio} /></a>
                        </IconButton>
                        <IconButton>
                            <a href="https://www.linkedin.com/in/krishna980/" rel="noreferrer" target="_blank"><img height="30px" alt="" src={linkedin} /></a>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
