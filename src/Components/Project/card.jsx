import React, { Component } from 'react'
import './Project.css'

export class Card extends Component {
  render() {
    return (
        <div className={this.props.class}>
            <section id = 'portfolio'>
            <div className="container portfolio_container">

            <div className="flip-card" tabIndex="0">
  <div className="flip-card-inner">
    <div className="flip-card-front" style={{background: this.props.color }}>
                <article className= 'portfolio item'>
                <div className="portfolio item-image"></div>



                <div data-aos="flip-down" data-aos-duration="2000" style={{transformOrigin: '0px 0px'}}>
                  <img src={this.props.IMG} alt="" style={{boxShadow: this.props.BoxShadow, border: this.props.Border }}/></div>
                <p>{this.props.name}</p>      
                </article>

                </div>
    <div className="flip-card-back">
      <p className='flip-text'>{this.props.text}<br></br>{this.props.text1}<br></br>{this.props.text2}<br></br>{this.props.text3}</p>
    </div>
  </div>
  <div className="container">
                    <div className="btn"><a href={this.props.GitHub} target="_blank" rel="noopener noreferrer">Github</a></div><div className="btn"><a href={this.props.Link} target="_blank" rel="noopener noreferrer">Link</a></div>  
</div>
</div>
            </div>
        </section>
        </div> 
    )
  }
}

export default Card

