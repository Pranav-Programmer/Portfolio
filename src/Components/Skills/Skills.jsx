import React from 'react'
import Typed from 'react-typed';
import Card from './skillCards'
import './Skills.css'
import img1 from "../../img/cpp.png";
import img2 from "../../img/mongoDB.png";
import img3 from "../../img/python.png";
import img4 from "../../img/ml.png";
import img5 from "../../img/react.png";
import img6 from "../../img/js.png";
import img7 from "../../img/sql.png";
import img8 from "../../img/php.png";
import img9 from "../../img/html.png";
import img10 from "../../img/css.png";
import img11 from "../../img/git.png";
import img12 from "../../img/docker.png";
import img13 from "../../img/postman.png";
const info = [ 
  {
    image: img1,   
  },
  {
    image: img2,   
  },
  {
    image: img3,   
  },
  {
    image: img4,   
  },
  {
    image: img5,
  },
  {
    image: img6,
  },
  {
    image: img7,   
  },
  {
    image: img8,   
  },
  {
    image: img9,   
  },
  {
    image: img10,
  },
  {
    image: img11,
  },
  {
    image: img12,
  },
  {
    image: img13,
  }
]

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../../img/arrow1.svg";
// import arrow2 from "../../img/arrow2.svg";


function Skills() {
  let i = 0;
  return (
    <div className='skills'>
         <div className='All-header'>    
          <Typed strings={['SKILLS']} typeSpeed={150} loop />
         </div>
       <div className='main-s' id="skill">
          {
          info.map(function (data) {
            return <Card IMG={data.image} class={`div7`} key={++i}/>
          })}
        </div>
    </div>
  )
}

export default Skills
