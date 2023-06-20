import React from 'react'
import './Footer.css'

import Wave from "../../img/wave3.png";

function Footer() {
  return (
    <div className="footer">
      <img className="footerimg" src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Copyright @2023</span>
        </div>
      </div>
  )
}

export default Footer
