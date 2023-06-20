import React, { Component } from 'react'
import './Skills.css'

export class skillCards extends Component {
  render() {
    return (
        <div className={this.props.class}>
            <section id = 'skills'>
            <div className="skills skills_container">
                <article className= 'skills item'>
                <div className="skills item-image"></div>
                <div data-aos="flip-up" data-aos-duration="700" style={{transformOrigin: '0px 0px'}}><img src={this.props.IMG} alt="" style={{boxShadow: this.props.BoxShadow, border: this.props.Border, width: '4rem'}}/></div>
                </article>
            </div>
        </section>
        </div> 
    )
  }
}

export default skillCards

