import React, {useRef, useState, useEffect} from 'react'
import './Intro.css'

// import FloatinDiv from "../FloatingDiv/FloatingDiv";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import CV from "../../img/cv.png";
// import Download from "../../img/download.png";
// import Vector1 from "../../img/vector1.png";
// import Vector2 from "../../img/vector2.png";
import Pranav from "../../img/pranav.jpg";
import Sitelogo from "../../img/Sitelogo.png";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import user from "../../img/user.png";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import MailIcon from '@mui/icons-material/Mail';
import ScrollableFeed from 'react-scrollable-feed'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

// import NLJ from "../../img/NLJ.png";
// import Web from "../../img/web.png";

// import Resume from "./PranavDharme_Resume.pdf";

function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const handleChatClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChatClick2 = () => {
    setIsModalOpen2(!isModalOpen2);
  };

  const handleChatClick3 = () => {
    setIsModalOpen2(false);
  };

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  }

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  }
  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  }

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  }

  const handleMouseEnter5 = () => {
    setIsHovered5(true);
  }

  const handleMouseLeave5 = () => {
    setIsHovered5(false);
  }
  const textStyle = {
    backgroundColor: isHovered ? '#ddd8fc' : 'transparent',
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign:'center',
    width:'50%',
    height:'2rem',
    
  };

  const textStyle2 = {
    backgroundColor: isHovered2 ? '#ddd8fc' : 'transparent',
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign:'center',
    width:'50%',
    height:'2rem',
  };

  const textStyle3 = {
    backgroundColor: '#e3e3e3',
    padding: '7px',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign:'center',
    width:'50%',
    height:'2rem',
  };
  const textStyle4 = {
    backgroundColor: isHovered4 ? '#2000f0' : 'transparent',
    padding: '10px',
    cursor: 'pointer',
    textAlign:'center',
    width:'100%',
    height:'2.5rem',
  };

  const textStyle5 = {
    backgroundColor: isHovered5 ? '#2000f0' : 'transparent',
    padding: '10px',
    cursor: 'pointer',
    textAlign:'center',
    width:'100%',
    height:'2.5rem',
  };

  const textStyle6 = {
    backgroundColor: '#e3e3e3',
    padding: '10px',  
    cursor: 'pointer',
    textAlign:'center',
    width:'100%',
    height:'2.5rem',
  };

  const [chatStarted, setChatStarted] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const startChat = () => {
    if (soundOn) {
      const audioCtx = new AudioContext();
      const oscillator = audioCtx.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(90, audioCtx.currentTime);
      oscillator.connect(audioCtx.destination);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.07);
    }
    setChatStarted(true);
  }

  const handleSoundToggle = () => {
    setSoundOn(!soundOn);
  };

  const sendMessage = async () => {
    // add user message to chat log
    setChatLog([...chatLog, { speaker: 'user', message: userInput }, { speaker: 'bot', message: generateResponse(userInput) }]);
    
    // clear input field
    setUserInput('');

    // generate bot response
    // setChatLog(chatLog.concat());
  }

  const generateResponse = (userInput) => {
    // generate a random response
    const responses = [
      // "I'm sorry, I don't understand.",
      // "Can you please rephrase your question?",
      // "I'm not sure, would you like me to look that up?",
      // "That's a great question! Give me a moment to think...",
      // "I'm afraid I cannot help you with that.",
      // "Hmm, let me see if I can find an answer for you.",
      // "I'm not programmed to answer that.",
      // "That's an interesting question. Let me get back to you on that.",
      // "I'm sorry, I cannot process that request.",
      // "I'm not sure I can answer that. Would you like me to try?",
      "Home: The home page of a portfolio website usually contains brief information about the website owner, including their name, profession, education, and current status.",
      "Skill: The skill page usually lists the technical and soft skills of the website owner, including programming languages, software tools, communication skills, and other relevant skills.",
      "Project: The project page usually showcases the website owner's past and current projects, along with project descriptions, features, and technologies used.",
      "Experience: The experience page usually lists the website owner's past and current work experience, including job titles, companies, roles and responsibilities, and achievements.",
      "Contact: The contact page usually contains the website owner's contact information, such as email address, phone number, and social media links, and a contact form for visitors to send messages or inquiries."
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }

  function handleReload() {
    window.location.reload();
  }

  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [contentRef]);

  return (
    <div className="Intro" id="Intro">
    {/* left name side */}
    <div className="i-left">
      <div className="i-name">
        {/* yahan change hy darkmode ka */}
        <span>Pranav</span>
        <span> Dharme</span>
        <span className='Edu1'>
          <h4>Indian Institute of Technology, Mandi</h4>
          <h4 className='Branch'>Computer Science & Engineering</h4>
          <h4>UG 4th Year (B.Tech.)</h4>
        </span>
        <span className='Edu2'>
        <p style={{ fontSize:'70%', textAlign:'justify', marginTop:'5%', width:'115%', marginLeft: '.7rem'}}>
            
        As a fourth-year undergraduate I have gained valuable experience in web development through internships and have a strong foundation in programming and development languages. My internship at ACE Online allowed me to work with React.js, Redux, Node.js, and MongoDB, contributing to the development of an online test series platform. I have completed various projects, including TextUp, a versatile note-taking application, AlertEye, a drowsiness detection system, and LiFiVerse, a project utilizing Arduino for data transmission using light. I have achived first rank in the high market potential category for a Design Practicum project and being selected as a Microsoft Engage 2022 Mentee. I have also demonstrated leadership and teamwork through positions like teaching assistant and involvement in planning management team.

        </p>
        </span>
      </div>
      {/* <button className="button i-button">Button</button> */}
      <div className="i-icons">
          <a href="https://drive.google.com/file/d/1oAJLQR9DvUEdxBCpe6TuleInk0yc-hBI/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img src={CV} alt=""/></a> 
          <a href="https://github.com/Pranav-Programmer" target="_blank" rel="noopener noreferrer"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/pranav-dharme/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="" /></a>     
          {/* <a href={Resume} download><img src={Download} alt=""/></a> */}
        </div>
    </div>
    <div className="i-right">
          {/* <img src={Vector1} alt="" />
          <img src={Vector2} alt="" /> */}
          <img src={Pranav} alt="" />
          <div data-aos="fade-right" data-aos-duration="2000" style={{top: '-10%', left:'50%'}}>
          {/* <FloatinDiv img={Web} text1="Web" text2="Developer" /> */}
          </div>
          <div style={{top: '47%', left:'10%'}}>
          {/* <FloatinDiv img={NLJ} text1="My" text2="Best Work" /> */}
          </div>
          <div style={{ position: "fixed", bottom: "0", right: "0", marginRight: ".7rem", marginBottom:'.7rem', zIndex:'100000', height:'85vh', width:'22rem', boxShadow:'0 0 0 2px #ccc' ,backgroundColor:'#fff', borderRadius:'10px' ,display: isModalOpen ? "block" : "none" }} className="chat-modal">
          <div style={{display:'flex', flexDirection:'row'}}>
          <MoreHorizIcon onClick={handleChatClick2}/>
          <div onClick={handleChatClick3}  className="chat-modal" style={{ position: "fixed", Top: "0px", Right: "0", marginLeft: ".3rem", marginTop:'3rem', zIndex:'1000000', height:'20vh', width:'11rem', boxShadow:'0 0 0 2px #ccc' ,backgroundColor:'#fff', borderRadius:'5px' ,display: isModalOpen2 ? "block" : "none" }}>
              <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'.3rem', marginTop:'-.1rem'}}>
                  <p style={textStyle6}><p style={{textDecoration:'none', color:'#575757', fontSize:'.9rem', marginLeft:'-4.5rem'}}><MailIcon style={{color:'#575757', fontSize:'1.2rem', marginBottom:'-.2rem', marginRight:'1rem'}}/>Contact</p></p>
                  <p style={textStyle4} onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}><a href="https://www.linkedin.com/in/pranav-dharme/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', fontSize:'.9rem', color: isHovered4 ? '#fff' : '#000', marginLeft:'-4.8rem'}}><AddToHomeScreenIcon style={{color: isHovered4 ? '#fff' : '#000', fontSize:'1.2rem', marginBottom:'-.2rem', marginRight:'1rem'}}/>Project</a></p>
                  <p style={textStyle5} onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}><p style={{textDecoration:'none', fontSize:'.9rem', color: isHovered5 ? '#fff' : '#000', marginLeft:'-.2rem'}}><VolumeUpIcon style={{color: isHovered5 ? '#fff' : '#000', fontSize:'1.2rem', marginBottom:'-.2rem', marginRight:'1rem'}}/>Sound<input type="checkbox" checked={soundOn} onChange={handleSoundToggle} style={{marginLeft:'4rem'}}/></p></p>
              </div>
          </div>
          <p style={{fontSize:'.9rem', textAlign:'center', width:'80%', marginTop:'.5rem', marginBottom:'.5rem'}}>Chat with us!</p>
          <h1 onClick={handleChatClick} style={{position: "absolute", fontSize:'3rem',top:"-1.1rem", right:"2rem", cursor:'default'}}>-</h1>
          <CloseIcon onClick={handleModalOpen} style={{position: "absolute", right:".2rem", cursor:'default'}}/>
          {showModal && (
            <>
            <div className="modal-overlay"></div>
          <div className="chat-modal" style={{ position: "fixed", Top: "0px", Right: "0", margin: "2rem 2rem 0 1.35rem", zIndex:'1000000', height:'28vh', width:'19rem', boxShadow:'0 0 0 2px #ccc' ,backgroundColor:'#fff', borderRadius:'5px'}}>
              <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'.3rem', marginTop:'-.1rem'}}>
                  <p style={textStyle6}><p style={{textDecoration:'none', color:'#575757', fontSize:'1.1rem' ,marginLeft:'-.7rem'}}>Do you want to end the conversation ?</p></p>
                  <Button onClick={handleReload} variant="contained" style={{flex: 1, borderRadius:'.5rem', backgroundColor:'#d93311', width:'50%', marginTop:'1rem', fontSize:'.9rem'}}>Yes</Button>
                  <Button onClick={handleModalClose} variant="contained" style={{flex: 1, borderRadius:'.5rem', backgroundColor:'#d93311', width:'50%', marginTop:'1rem', fontSize:'.9rem'}}>No</Button>
              </div>
          </div>
          </>
          )}
          </div>
            <div style={{height:'95%', overflowY:'hidden'}} onClick={handleChatClick3} >
          <ScrollableFeed>
              <div style={{boxShadow:'0 .7px 0 0 #ccc', borderRadius:'1rem', margin:'1rem .3rem', paddingBottom:'.5rem'}}>
                  <div style={{display:'flex', flexDirection:'row', gap:'.3rem'}}>
                      <img style={{ top: "0", left: "0", height:'1.3rem', width:'1.3rem' }} src={Sitelogo} alt="" />
                      <p style={{fontSize:'.7rem', marginTop:'.3rem'}}>ChatBot    {time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                  </div>
                  <div>
                    <p style={{fontSize:'.8rem', marginLeft:'2rem', marginTop:'.5rem'}}>Hey!</p>
                    <p style={{fontSize:'.8rem', marginLeft:'2rem', marginTop:'.7rem', textAlign:'justify', marginRight:'1rem', color:'GrayText'}}>Did you enjoy chatting on the previous page? Guess what, they use LiveChat! 😉</p>
                  </div>
                  <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'.3rem', marginTop:'.3rem'}}>
                  <p style={textStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><a href="https://www.linkedin.com/in/pranav-dharme/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'#0c0060', fontSize:'.9rem'}}>Linkedin</a></p>
                  <p style={textStyle2} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}><a href="https://github.com/Pranav-Programmer" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'#0c0060', fontSize:'.9rem'}}>GitHub</a></p>
                  <p style={textStyle3}><p style={{textDecoration:'none', color:'#575757', fontSize:'.9rem'}}>Curriculum vitae</p></p>
                  </div>
              </div>

              <div style={{boxShadow:'0 .7px 0 0 #ccc', borderRadius:'1rem', margin:'1rem .3rem', paddingBottom:'.5rem'}} onClick={handleChatClick3} >
                  <div style={{display:'flex', flexDirection:'row', gap:'.3rem'}}>
                      <img style={{ top: "0", left: "0", height:'1.3rem', width:'1.3rem' }} src={Sitelogo} alt="" />
                      <p style={{fontSize:'.7rem', marginTop:'.3rem'}}>ChatBot    {time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                  </div>
                  <div>
                    <p style={{fontSize:'.8rem', marginLeft:'2rem', marginTop:'.5rem'}}>What brings you here today?</p>
                  </div>
              </div>
              <p style={{fontSize:'.7rem', marginLeft:'2rem', marginTop:'.7rem', textAlign:'justify', marginRight:'1rem', color:'GrayText'}}>Chat closed due to long user inactivity</p>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '.5rem', alignItems: 'center' }} onClick={handleChatClick3}>
                    <hr style={{ flex: 1, height: '.1px', backgroundColor: '#ddddde', marginRight: '0.5rem' }} />
                    <p style={{ fontSize: '.7rem', margin: '0', whiteSpace: 'nowrap' }}>{time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    <hr style={{ flex: 1, height: '.1px', backgroundColor: '#ddddde', marginLeft: '0.5rem'}} />
              </div>

                  <div style={{display:'flex', flexDirection:'row', marginLeft:'45%', marginTop:'1rem'}}>
                      <img style={{ top: "0", left: "0", height:'2rem', width:'2rem' }} src={user} alt="" />
                  </div>
                  <div>
                  <p style={{fontSize:'.8rem', marginLeft:'2rem', marginTop:'.5rem', textAlign:'justify', marginRight:'1rem'}}>Hello! 👋Nice to see you here! By pressing the "Start chat" button you you can talk to our chatbot and ask anything about our site.</p>
                  </div>
                 {!chatStarted && <Button variant="contained" onClick={startChat} style={{flex: 1, borderRadius:'.5rem', backgroundColor:'#2000f0', width:'90%', marginTop:'1rem', marginLeft:'5%', marginBottom:'1rem'}}>Start Chat</Button> } 

                {chatStarted &&
                  <div style={{margin:'1rem 1rem 2rem 1rem', textAlign:'center'}}>
                    
                  <p>Hello, how may I help you?</p>
                  {/* <textarea  rows="1" cols="28"></textarea> */}
                  {/* <button onClick={sendMessage}>Send</button> */}
                  {/* <ColorButton  variant="contained">Send</ColorButton> */}
                  
                  <div id="chat-log">
                    {chatLog.map((chat, index) => (
                      <div key={index}>
                        {chat.speaker === 'user' && (
                          <div>
                            <div style={{display:'flex', flexDirection:'row', marginTop:'1rem'}}><img style={{ height:'1.2rem', width:'1.2rem', marginTop:'.2rem' }} src={user} alt="" /><p style={{textAlign:'justify', marginLeft:'.5rem'}}>{chat.message}</p></div>
                          </div>
                        )}

                        {chat.speaker === 'bot' && (
                          <div>
                            <div style={{display:'flex', flexDirection:'row', marginTop:'1rem'}}><img style={{ height:'1.2rem', width:'1.2rem', marginTop:'.2rem' }} src={Sitelogo} alt="" /><p style={{textAlign:'justify', marginLeft:'.5rem'}}>{chat.message}</p></div>
                          </div>
                        )}

                        
                      </div>
                    ))}
                  </div>
                </div>
                }
                </ScrollableFeed>
              </div>
              <div style={{display:'flex', flexDirection:'row', marginLeft:'38%'}}>
                {chatStarted && 
                 <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop:'-4.0rem', marginLeft:'-54%', height:'2rem'}}>
                 <textarea
                   aria-label="Ask your doubt…"
                   enterkeyhint="send"
                   dir="ltr"
                   className="lc-1ioonsj e1m92qam0"
                   placeholder="Ask your doubt…"
                   spellCheck={false}
                   data-ms-editor={true}
                   value={userInput} 
                   onChange={(e) => setUserInput(e.target.value)}
                   onKeyDown={(e) => {
                    if (e.key === 'Enter' && userInput.trim() !== '') {
                      sendMessage();
                    }
                  }}
                   style={{border:'none', width:'19.2rem', padding:'.3rem 1rem  1rem .5rem'}}
                 />
                 {/* <div style={{marginTop:'3rem', marginRight:'.5rem'}}><SentimentSatisfiedAltIcon style={{marginLeft:'-1rem'}}/></div> */}
                 {userInput.trim() !== '' ? (<SendIcon onClick={sendMessage} style={{marginTop:'2.8rem', backgroundColor:'blue', color:'white', borderRadius:'5px', marginLeft:'-.3rem'}}/>):(<SendIcon style={{marginTop:'2.8rem', marginLeft:'-.3rem'}}/>)}
           </div>}
            {/* <p style={{textAlign:'center', fontSize:'.8rem'}}>powered by</p><img style={{ height:'1rem', width:'1rem', marginLeft:'5px'}} src={Sitelogo} alt="" /> */}
            </div>
            </div>
          </div>
          <img style={{ position: "fixed", bottom: "0", right: "0", marginRight: "1rem", marginBottom:'1rem', zIndex:'10000', height:'2.5rem', width:'2.5rem' }} src={Sitelogo} alt="" onClick={handleChatClick}/>
          {/* <div className="blur" style={{ background: "rgb(238 210 255)"}}></div>
        <div className="blur2"></div> */}
        </div>
  )
}

export default Intro
