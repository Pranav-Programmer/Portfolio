import React from 'react'
import Typed from 'react-typed';
import './Project.css'
import Card from './card'
import IMG1 from '../../img/prj1.png';
import IMG2 from '../../img/prj2.jpg';
import IMG3 from '../../img/prj3.jpg';
import IMG4 from '../../img/prj4.jfif';
import IMG5 from '../../img/prj5.png';
import IMG6 from '../../img/prj6.png';
const info = [ 
  {
    name: 'NlistJob',
    link: 'http://jobway.epizy.com/', // Link to the project
    github: 'https://github.com/Pranav-Programmer/NlistJob', // Link to the github repo
    image: IMG1,
    border: 'solid #6c72b2', // border-
    boxShadow: '0 15px 15px #6c72b2', // box-shadow
    color: 'rgb(228, 177, 177)',
    text: '• NlistJob is a comprehensive job portal built using HTML, CSS, PHP, MySQL, Bootstrap and JavaScript tech-stack.',          
    text1:'• It enables recruiters to post job listings, verify their businesses, and connect with potential candidates securely.',
    text2:'• Job seekers can apply for jobs directly, ensuring accurate and verified personal and educational details.',               
  },
  {
    name: 'FaceRec',
    link: 'https://youtu.be/W-godAD9yWE', // Link to the project
    github: 'https://github.com/Pranav-Programmer/Face-Recognition-Advance-Attendance-System.github.io', // Link to the github repo
    image: IMG2,
    border: '0 15px 15px #6300bd', // border-
    boxShadow: '0 15px 15px #6300bd', // box-shadow
    color: 'rgb(177, 231, 210)',
    text: '• The Face Attendance System is a robust and user-friendly project built using Python, OpenCV, face_recognition, and Streamlit.',          
    text1:'• It employs deep learning algorithms to perform real-time face recognition, allowing users to mark attendance effortlessly.',
    text2:'• With its intuitive interface and accurate face recognition capabilities, this system simplifies attendance management for various applications.',               
  },
  {
    name: 'TextUp',
    link: 'https://text-up.netlify.app/', // Link to the project
    github: 'https://github.com/Pranav-Programmer/TextUp', // Link to the github repo
    image: IMG6,
    border: '0 15px 15px #ede5ee', // border-
    boxShadow: '0 15px 15px #ede5ee', // box-shadow
    color: 'rgb(193, 225, 232)',
    text: '• TextUp is a robust note-taking application built using React.js for the frontend, Node.js for the backend, and MongoDB for data storage.',          
    text1:'• It offers users a seamless experience to create, manage, and search text-based notes, along with the ability to upload images.',
    text2:'• With its user-friendly interface and secure data storage, TextUp simplifies note organization and retrieval for efficient usage.',
  },
  {
    name: 'LiFiVerse',
    link: 'https://youtu.be/fc5VE636f4I', // Link to the project
    github: 'https://github.com/Pranav-Programmer/Li-Fi', // Link to the github repo
    image: IMG3,
    border: '0 15px 15px #0e6e84', // border-
    boxShadow: '0 15px 15px #0e6e84', // box-shadow
    color: 'rgb(234, 191, 211)',
    text: '• This Li-Fi project utilizes Arduino Nano devices, LED bulbs, and photodiodes to enable wireless data transmission through light.',          
    text1:'• It employs a custom encoding scheme for transmitting text, which is received and displayed on an LCD.',
    text2:'• The project aims to showcase the potential of Li-Fi technology for high-speed, secure, and efficient communication in various applications.'
  },
  {
    name: 'AlertEye',
    link: 'https://user-images.githubusercontent.com/79044490/203357603-fe72a49e-1893-4451-9960-6b75cf487d6a.mp4', // Link to the project
    github: 'https://github.com/Pranav-Programmer/Detecting_Drowsiness_based_on_Camera_Sensor', // Link to the github repo
    image: IMG4,
    border: '0 15px 15px #e0e6e7', // border-
    boxShadow: '0 15px 15px #e0e6e7', // box-shadow
    color: 'rgb(234, 234, 197)',
    text: '• The AlertEye Web Application is a project that utilizes a camera sensor and eye aspect ratio analysis to detect driver drowsiness in real-time.',          
    text1:'• It is built using technologies such as Python, dlib, OpenCV, and Streamlit, providing a user-friendly interface for registration, login, and personalized drowsiness detection.',
    text2:'• Users can conveniently track their drowsiness patterns and receive timely alerts, enhancing driver safety.',
  },
  {
    name: 'MoodFlip',
    link: 'https://pranav-programmer.github.io/MoodFlip/', // Link to the project
    github: 'https://github.com/Pranav-Programmer/MoodFlip.github.io', // Link to the github repo
    image: IMG5,
    border: '0 15px 15px #c0c0c0', // border-
    boxShadow: '0 15px 15px #c0c0c0', // box-shadow
    color: 'rgb(236, 221, 194)',
    text: '• MoodFlip is a modern social media homepage web app built using HTML, CSS, and JavaScript.',          
    text1:'• It utilizes responsive design and incorporates dynamic content to provide users with an engaging and visually appealing browsing experience.',
    text2:'• With its customizable dark theme and intuitive interface, MoodFlip allows users to explore, connect, and share content seamlessly.'
  }
]

let i = 1;
function project() {
  return (
    <div className='project'>
         <div className='All-header'>    
          <Typed strings={['PROJECTS']} typeSpeed={150} loop />
         </div>
       <main id='project'>
          {
          info.map(function (data) {
            return <Card IMG={data.image} name={data.name} Link={data.link} GitHub={data.github} Border={data.border} BoxShadow={data.boxShadow} color={data.color} text={data.text} text1={data.text1} text2={data.text2} text3={data.text3} class={`div${i++}`} key={i}/>
          })}
        </main>
        <p className='more' style={{ marginLeft:'87%', marginTop:'2.5rem'}}><a href="https://github.com/Pranav-Programmer?tab=repositories" target="_blank" rel="noopener noreferrer">More project</a></p>
    </div>
  )
}

export default project
