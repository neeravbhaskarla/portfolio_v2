import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './FooterField.scss'

function FooterField({requiredNav, ...props}) {
  const [hovered, setHovered] = useState(false)
  return (
      <div className='footerfield-wrapper'>
        <div className="top-space"></div>
          {requiredNav && 
            <div className="goto-path-wrapper">
              <div className="path-wrapper">
                <Link className="path-name" 
                  to={props.path} 
                  onMouseEnter={()=>setHovered(true)}
                  onMouseLeave={()=>setHovered(false)}>
                  <span>{props.name}</span>
                </Link>
                <div className="arrow-symbol" 
                  style={hovered?{transform: "translateX(20%)"}:null}>
                  <svg width="40" height="23" viewBox="0 0 40 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.0674 12.5607C39.6532 11.9749 39.6532 11.0251 39.0674 10.4393L29.5215 0.893398C28.9357 0.307612 27.986 0.307612 27.4002 0.893398C26.8144 1.47918 26.8144 2.42893 27.4002 3.01472L35.8854 11.5L27.4002 19.9853C26.8144 20.5711 26.8144 21.5208 27.4002 22.1066C27.986 22.6924 28.9357 22.6924 29.5215 22.1066L39.0674 12.5607ZM0.993256 13H38.0068V10H0.993256V13Z" fill="black"/>
                  </svg>
                </div>
              </div>
            </div>}
          <div className="contact-wrapper">
            <div className="contact-top-space"></div>
            <div className="media-links-wrapper">
              <div className="media-links">
                <div className="linked-in">
                  <a href='https://www.linkedin.com/in/neeravbhaskarla/' target="_blank">LINKEDIN</a>
                </div>
                <div className="github">
                  <a href='https://github.com/neeravbhaskarla' target="_blank">GITHUB</a>
                </div> 
                <div className="email">
                  <a href='mailto:neeravbhaskarla@gmail.com'>EMAIL</a>
                </div>
              </div>
            </div>
            <div className="version">
              <span>&#169;2023</span>
            </div>
          </div>
      </div>
  )
}

export default FooterField
