import AnimationRevealPage from "helpers/AnimationRevealPage";
import React, { Component } from "react";
import Header from "components/headers/light.js";
import TeamCard from "components/cards/Guest-Guests-Cards";
import Footer from "components/footers/Home-Footer";
 
import { ReactComponent as EmailIcon } from "images/email-envelope.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import { ReactComponent as InstagramIcon } from "images/icons8-instagram.svg";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import a from '../images/team/Shreyansh.jpg';
import b from '../images/team/nikhil.jpg';
import c from '../images/team/gayathiri.jpg';
import d from '../images/team/swaksh.jpg';
import e from '../images/team/Indusri (B22AI039).jpg';
import f from '../images/team/shirisha.jpg';
import g from '../images/team/vinay.jpg';
import h from '../images/team/adarsh.jpeg';
import i from '../images/team/User.jpg';
import j from '../images/team/BHARGAVI.jpg';
import k from '../images/team/User.jpg';
import l from '../images/team/User.jpg';
import m from '../images/team/akash.jpg';
import n from '../images/team/karak.png';
import o from '../images/team/User.jpg';
import p from '../images/team/User.jpg';
import q from '../images/team/User.jpg';
import r from '../images/team/User.jpg';
import s from '../images/team/soham niraj.jpg';
import t from '../images/team/User.jpg';
import u from '../images/team/Ankush.jpeg';
import v from '../images/team/User.jpg';
import w from '../images/team/User.jpg';
import x from '../images/team/atharva.jpg';
import y from '../images/team/User.jpg';
import z from '../images/team/yashraj.jpg';
import a1 from '../images/team/pragathi.jpeg';
import a2 from '../images/team/aditya.jpeg';
import a3 from '../images/team/suroshi.jpg';
import a4 from '../images/team/sukruti.jpg';
import a5 from '../images/team/paramita.jpg';
import a6 from '../images/team/User.jpg';
import a7 from '../images/team/aradhya.jpg';
import a8 from '../images/team/Satakshi.jpg';
import a9 from '../images/team/kowshika.jpg';
import a10 from '../images/team/yogesh.jpg';
import dd from '../images/team/User.jpg';
import aa from '../images/team/bhanu.jpg';
import bb from '../images/team/User.jpg';
import cc from '../images/team/User.jpg';
import xyz from '../images/team/ankush chaudary.jpg'
import xyzw from '../images/team/Shashank.jpg'
import Neel from '../images/team/Neel.jpg'
import pr from '../images/team/Prithvi.jpg'
import kanak from '../images/kanak.jpeg';
import rajdeep from '../images/rajdeep.jpeg';
import anupama from '../images/anupama.jpg'
import vidhi from '../images/vidhi.jpg';
import chahat from '../images/chahat.jpg';
import har from '../images/Harshika Arya (B22CS023).jpg';
import niha from '../images/Niharika Pradeep (M23LDX009).jpeg';
import geeta from '../images/Geetanshi.jpg';
import yu from '../images/Yuvraj Saran (B22ME074).jpg';
import harsh from '../images/Harsh Agarwal .jpg';
import yo from '../images/Yogesh Mundankar.jpg';
import abh from '../images/Abhay Kashyap.jpg';


function Guest() {
  
  const team7 = {
    heading: "Faculty Advisors",
  
    cards: [
      {
        imageSrc:kanak,     
        name: "Kanak Yadav",
        position: "",
        links: [
          
          {
            mail: "kanakyadav@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/kanak-yadav-6a174099/",
            icon: LinkedinIcon
          }
        
          
        ],
      },
      {
        imageSrc: rajdeep,
        name: "Rajdeep Konar",
        position: "",
        links: [
          
          {
            mail: "rajdeepkonar@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/rajdeep-konar-44968613/?originalSubdomain=in",
            icon: LinkedinIcon
          }
          
         
        ],
      },
      {
        imageSrc: anupama,
        name: "Anupama Mohan",
        position: "",
        links: [
          
          {
            mail: "amohan@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "",
            icon: LinkedinIcon
          }
          
        ],
      },
    ],
   
  };
  

 
  
 
  
  return (
    <AnimationRevealPage>
      <Header color="orange" />

      <TeamCard heading={team7.heading}
        subheading={team7.subheading}
        description={team7.description}
        cards={team7.cards}
        cards_ah={team7.cards_ah} />

      


      

      
  

    

      






      <Footer />
    </AnimationRevealPage>
  );
  }

export default Guest;
 
 