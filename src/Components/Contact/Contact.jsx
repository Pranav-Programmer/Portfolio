import React from 'react'
import './Contact.css'

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';

import Typed from 'react-typed';

import Location from '../../img/location.png'
// import Email from '../../img/email.png'
import Shape from '../../img/shape.png'

import {useEffect } from 'react';

function Contact() {

  const [ipAddress, setIpAddress] = useState('');
  const [name, setName] = useState('');
  const onChangeName = (e) => setName(e.target.value);
  const [email, setEmail] = useState('');
  const onChangeEmail = (e) => setEmail(e.target.value);
  const [message, setMessage] = useState('');
  const onChangeMessage = (e) => setMessage(e.target.value);
  const [mobile, setMobile] = useState('');
  const onChangeMobile = (e) => setMobile(e.target.value);

  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
      .catch(error => console.error(error));
  }, []);

  const form = useRef();

  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
    setMobile('');

    if (localStorage.getItem(ipAddress)) {
      // message has already been sent from this device
      setDone(false); // reset the form
      alert('You can only send one message per device.');
    } else {
      // send the message
      emailjs.sendForm('service_1rjd4jt', 'template_96pgakh', form.current, 'YGNYceF3vB1zC4aT_')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            localStorage.setItem(ipAddress, true); // store the IP address in local storage
        }, (error) => {
            console.log(error.text);
        });
    }
  };
  
  return (
    <div>
      <div className='All-header' style={{margin: '0 0 -4% 0'}}>  
                <Typed strings={['CONTACT']} typeSpeed={150} loop />
      </div>
      <div className="container-c" id="contact">
      <span className="big-circle"></span>
      <img src={Shape} className="square" alt="" />
      <div className="form" data-aos="flip-left" data-aos-duration="3000" style={{transformOrigin: '0px 0px'}}>
        <div className="contact-info">
          <h3 className="title">Let's get connected</h3>
          <p className="text">
            Join me in a conversation filled with technology and science, let's connect and explore the world together!
          </p>

          <div className="info">
            <div className="information">
              <img src={Location} className="icon" alt="" />
              <p>Indian Institute of Technology, Mandi</p>
            </div>
            {/* <div className="information">
              <img src={Email} className="icon" alt="" />
              <p>b20095@students.iitmandi.ac.in</p>
            </div> */}
           
          </div>

        <div className="social-media">
            <p>Connect with me :</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/yogesh.bari.1069" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/pranav_dharme_" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/pranav_dharme_/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://discordapp.com/users/pieCharm" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form ref={form} onSubmit={sendEmail}>
            <h3 className="title">Contact me</h3>
            <div className="input-container-c">
              <input type="text" value={name} onChange={onChangeName} name="name" className="input" placeholder='Name' pattern="[a-zA-Z]{3,50}" required/>
              {/* <label for=""></label> */}
              {/* <span>Name</span> */}
            </div>
            <div className="input-container-c">
              <input type="email" value={email} onChange={onChangeEmail} name="email" className="input" placeholder='Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
              {/* <label for=""></label> */}
              {/* <span>Email</span> */}
            </div>
            <div className="input-container-c">
              <input type="tel" value={mobile} onChange={onChangeMobile} name="mobile" className="input" placeholder='Mobile (optional)' pattern="[6-9]{1}[0-9]{9}"/>
              {/* <label for=""></label> */}
              {/* <span>Mobile</span> */}
            </div>
            <div className="input-container-c textarea">
              <textarea value={message} onChange={onChangeMessage} name="message" className="input" placeholder='Message' pattern="[a-zA-Z]{500}" required></textarea>
              {/* <label for=""></label> */}
              {/* <span>Message</span> */}
            </div>
            <input type="submit" value="Send" className="button s-button" />
          </form>
          <span style={{fontWeight: 'bold', marginLeft:'6%', color:'#fff'}}>{done && "Thank you for Contacting me!"}</span>
        </div>
      </div>
    </div>
    <div className="blur-c"></div>
    </div>
  )
}

export default Contact

