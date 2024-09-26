import AnimationRevealPage from "helpers/AnimationRevealPage";
import React, { Component } from "react";
import Header from "components/headers/light.js";
import TeamCard from "components/cards/Team-Teams-Card";
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
//import kanak from '../images/kanak.jpeg';
//import rajdeep from '../images/rajdeep.jpeg';
//import anupama from '../images/anupama.jpg'
import vidhi from '../images/vidhi.jpg';
import chahat from '../images/chahat.jpg';
import har from '../images/Harshika Arya (B22CS023).jpg';
import niha from '../images/Niharika Pradeep (M23LDX009).jpeg';
import geeta from '../images/Geetanshi.jpg';
import yu from '../images/Yuvraj Saran (B22ME074).jpg';
import harsh from '../images/Harsh Agarwal .jpg';
import yo from '../images/Yogesh Mundankar.jpg';
import abh from '../images/Abhay Kashyap.jpg';
import vs from '../images/team/vs1.jpeg';
import tharun from '../images/team/tharun.jpg';


function Team() {
  const team4 = {
    heading: "Web Development Team",
    description: "Meet our passionate team dedicated to web development.",
    cards: [
      // Head Members
      {
        imageSrc: a,
        position:"Head",
        name: "Shreyansh Lodha",
        links: [
          {
            url: "https://www.instagram.com/shreyanshjain0301?igsh=MTRicmQ4enJjbDQ=",
            icon: InstagramIcon,
          },
 
          {
            mail: "lodha.1@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/shreyansh-lodha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: LinkedinIcon,
          },
          
        ],
      },
      {
        imageSrc: b,
        position: "Head",
        name: "Nikhil Agrawal",
        links: [
          {
            url: "https://www.instagram.com/nikhilagrawal297/",
            icon: InstagramIcon,
          },
 
          {
            mail: "agrawal.25@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/nikhil-agrawal-022879228/",
            icon: LinkedinIcon,
          },
          
        ],
      },
      
      // Add more team members here following the same structure
    ],

    cards_ah:[
      {
        imageSrc: c,
        position: "Assistant Head",
        name: "Gayathiri B.S",
        links: [
          {
            url: "https://www.instagram.com/reshsha08?igsh=eHF1ZnAyMzV0ZHVo",
            icon: InstagramIcon,
          },
 
          {
            mail: "b22ee017@iitj.ac.in ",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/gayathiri-b-s-398470236",
            icon: LinkedinIcon,
          },
        ]
            
      },      
      {
        imageSrc: d,
        position: "Assistant Head",
        name: "Swaksh Patwari",
        links: [
          {
            url: "http://www.instagram.com/swakshpatwari",
            icon: InstagramIcon,
          },
 
          {
            mail: "b22ai065@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/swaksh-patwari-0aa891276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: LinkedinIcon,
          },
          
        ],
      },
 
      {
        imageSrc: e,
        position: "Assistant Head",
        name: "Indusri Siramsetty",
        links: [
          {
            url: "https://www.instagram.com/indusri_siramsetty?igsh=MXIzdDRkN2xtZ2Fs",
            icon: InstagramIcon,
          },
 
          {
            mail: "b22ai039@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/indusri-siramsetty-ab6597272",
            icon: LinkedinIcon,
          },
          
        ],
      },
      {
        imageSrc: f,
        position: "Assistant Head",
        name: "Mandari Shirisha",
        links: [
          {
            url: "https://www.instagram.com/hayathi_333?igsh=ZjB1MXIzd2g5bTh6",
            icon: InstagramIcon,
          },
 
          {
            mail: "b22bb025@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/shirisha-mandari-119bba26a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: LinkedinIcon,
          },
          
        ],
      },      
    ]
  };
  const team1 = {
    heading: "Accomodation and Transport",
    // subheading: "lorem ipsum",
    cards: [
      {
        imageSrc: g,
        position: "Head",
        name: "Vinay Vaishnav",
        links: [
          {
            url: "https://instagram.com/vinay_vaishnav360?igshid=MTNiYzNiMzkwZA==",
            icon: InstagramIcon,
          },
 
          {
            mail: "vaishnav.3@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/vinay-vaishnav-996027211",
            icon: LinkedinIcon
          }
        ]
          
      },
    
      {
        imageSrc: h,
        position: "Head",
        name: "Adarsh Gupta",
        links: [
          {
            url: "",
            icon: InstagramIcon,
          },
 
          {
            mail: "m23air001@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/adarsh-gupta-b38545213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            icon: LinkedinIcon
          }
          
        ],
      },
      
    ],
    cards_ah:[
      {
        imageSrc: yu,
        position: "Assistant Head",
        name: "Yuvraj Saran",
        links: [
          {
            url: "https://www.instagram.com/yuvrajsrn/",
            icon: InstagramIcon,
          },
 
          {
            mail: "b22me074@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/yuvrajsrn/",
            icon: LinkedinIcon
          }
          
        ],
      },
      {
        imageSrc: j,
        position: "Assistant Head",
        name: "Bobba Geetha Sri Manju Bhargavi",
        links: [
          {
            url: "https://www.instagram.com/bhargavi.bobba?igsh=MWF0azBsd3I0ejFkYg==",
            icon: InstagramIcon,
          },
 
          {
            mail: "b22ch046@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/bhargavi-bobba-39bb26256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: LinkedinIcon
          }
          
        ],
      },
      
      {
        imageSrc: m,
        position: "Assistant Head",
        name: "Akash Chatterjee",
        links: [
          {
            url: "",
            icon: InstagramIcon,
          },
 
          {
            mail: "m23air002@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/akash-chatterjee-239a421b9",
            icon: LinkedinIcon
          }
          
        ],
      },
      {
        imageSrc: xyz,
        position: "Assistant Head",
        name: "Ankush Chaudhary",
        links: [
          {
            url: "",
            icon: InstagramIcon,
          },
 
          {
            mail: "m23air002@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/akash-chatterjee-239a421b9",
            icon: LinkedinIcon
          }
          
        ],
      },
    ]
  };
  const team2 = {
    heading: "Design and Creativity",
    // subheading: "Our Team",
    cards: [
      {
        imageSrc: n,
        position: "Head",
        name: "B. Karak",
        links: [
          {
            url: "",
            icon: InstagramIcon,
          },
          {
            mail: "m23ldx002@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/bitihotra/",
            icon: LinkedinIcon
          }
          
        ],
      },
      
    ],
    cards_ah:[
      {
        imageSrc: chahat,
        position: "Assistant Head",
        name: "Chahat Baranwal",
        links: [
          {
            url: "https://www.instagram.com/chahat_baranwal_?igsh=MzVvcDRlbWRjNXVw",
            icon: InstagramIcon,
          },
          {
            mail: "b22bb014@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/chahat-baranwal-91111b212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: LinkedinIcon
          }
         
        ],
      },
      {
        imageSrc: har,
        position: "Assistant Head",
        name: "Harshika Arya",
        links: [
          {
            url: "https://www.instagram.com/harsheeka._?igsh=M29qOXR5aGlqbms5",
            icon: InstagramIcon,
          },
          {
            mail: "B22CS023@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/harshikaarya?trk=contact-info",
            icon: LinkedinIcon
          }
         
        ],
      },
      {
        imageSrc: niha,
        position: "Assistant Head",
        name: "Niharika Pradeep",
        links: [
          {
            url: "https://www.instagram.com/nih_b_r_s/",
            icon: InstagramIcon,
          },
          {
            mail: "niharikapradeep7@gmail.com",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/niharika-pradeep/",
            icon: LinkedinIcon
          }
         
        ],
      },
      {
        imageSrc:yo,
        position: "Assistant Head",
        name: "Yogita Mundankar",
        links: [
          {
            url: "",
            icon: InstagramIcon,
          },
          {
            mail: "b22cs068@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "http://www.linkedin.com/in/yogita-mundankar-a816261ba",
            icon: LinkedinIcon
          }
         
        ],
      },
    ]
  };
  const team3 = {
    heading: "Events and Curation",
    // subheading: "Our Team",
    cards: [
      {
        imageSrc: s,
        position: "Head",
        name: "Soham Deshmukh",
        links: [
          {
            url: "https://www.instagram.com/so_uhhmm",
            icon: InstagramIcon,
          },
          {
            mail: "deshmukh.2@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/soham-deshmukh-iitj",
            icon: LinkedinIcon
          }
          
        ],
      },
      {
        imageSrc: Neel,
        position: "Head",
        name: "Neel Barve",
        links: [
          {
            url: "https://www.instagram.com/neelb03/",
            icon: InstagramIcon,
          },
          {
            mail: "barve.1@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/neel-barve/",
            icon: LinkedinIcon
          }
          
        ],
      },
      {
        imageSrc: u,
        position: "Head",
        name: "Ankush Kumar Nayak",
        links: [
          {
            url: "https://www.instagram.com/ankushkunayak?igsh=YXZjbjZmOW92aHA2",
            icon: InstagramIcon,
          },
          {
            mail: "m23msa012@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/ankush-kumar-nayak",
            icon: LinkedinIcon
          }
        ],
      },
      {
        imageSrc:pr,
        position: "Head",
        name: "A V Prithvi Kiran Naik",
        links: [
          {
            url: "https://www.instagram.com/prithvikiran04/",
            icon: InstagramIcon,
          },
          {
            mail: "naik.11@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/prithvi-kiran-385a902b1/",
            icon: LinkedinIcon
          }
          
        ],
      },
      
    ],
    cards_ah:[
      {
        imageSrc: vidhi,
        position: "Assistant Head",
        name: "Vidhi Jain",
        links: [
          {
            url: "https://www.instagram.com/mapnifavouritehu_?igsh=eDBsdGtqZ3NwMXVx",
            icon: InstagramIcon,
          },
          {
            mail: "b22cs083@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/vidhijain04",
            icon: LinkedinIcon
          }
          
        ],
      },
      {
        imageSrc: x,
        position: "Assistant Head",
        name: "A.K.R. Deshpande",
        links: [
          {
            url: "https://www.instagram.com/a.k.r.deshpande/",
            icon: InstagramIcon,
          },
          {
            mail: "b22ee013@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://in.linkedin.com/in/a-k-r-deshpande-078bab252",
            icon: LinkedinIcon
          }
          
        ],
      },
      {
        imageSrc:geeta,
        position: "Assistant Head",
        name: "Geetanshi Maheshwari",
        links: [
          {
            url: "",
            icon: InstagramIcon,
          },
          {
            mail: "b22ph008@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/geetanshi-maheshwari-1a8914258/?originalSubdomain=in",
            icon: LinkedinIcon
          }
          
        ],
      },
      {
        imageSrc: z,
        position: "Assistant Head",
        name: "Yashraj Chaturvedi",
        links: [
          {
            url: "https://www.instagram.com/yashrajthebrahmin?igsh=MWVvb2N0YnhxMzIydQ==",
            icon: InstagramIcon,
          },
          {
            mail: "b22ai059@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/yashraj-chaturvedi-b20b8a256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: LinkedinIcon
 
          }
          
        ],
      },
      {
        imageSrc: a1,
        position: "Assistant Head",
        name: "Pragati Sinha",
        links: [
          {
            url: "https://www.instagram.com/pragatisinhaaa?igsh=ZDQ1dHBwcGZuZ3ho&utm_source=qr",
            icon: InstagramIcon,
          },
          {
            mail: "b22mt048@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/pragati-sinha17?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            icon: LinkedinIcon
          }
          
        ],
      },
      
    ]
    
  };
  /*const team7 = {
    heading: "Faculty Advisors",
  
    cards: [
      {
        imageSrc:kanak,     
        name: "Dr. Kanak Yadav",
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
        name: "Dr. Rajdeep Konar",
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
        name: "Dr. Anupama Mohan",
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
   
  };*/
  
  const team0 = {
    heading: "Festival Chiefs",
  
    cards: [
      {
        imageSrc:a2,     
        name: "Aaditya Baranwal",
        position: "",
        links: [
          {
            url: "https://www.instagram.com/__.aeternum.__",
            icon: InstagramIcon,
          },
 
          {
            mail: "baranwal.1@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/aadityabaranwal",
            icon: LinkedinIcon
          }
        
          
        ],
      },
      {
        imageSrc: a3,
        name: "Suroshri Paul",
        position: "",
        links: [
          {
            url: "https://www.instagram.com/suroshri_paul?igsh=aGZ5eHZwMWp2ZWtu",
            icon: InstagramIcon,
          },
          {
            mail: "m23msa094@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/suroshri-paul",
            icon: LinkedinIcon
          }
          
         
        ],
      },
      {
        imageSrc: a4,
        name: "Sukriti Goyal",
        position: "",
        links: [
          {
            url: "https://www.instagram.com/_sukriti_1023?igsh=djJnZDdrb212MWpk",
            icon: InstagramIcon,
          },
          {
            mail: "goyal.23@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/sukriti-goyal-1697a71a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: LinkedinIcon
          }
          
        ],
      },
    ],
    cards_ah:[ {
      imageSrc:a2,     
      name: "Aaditya Baranwal",
      position: "",
      links: [
        {
          url: "https://www.instagram.com/__.aeternum.__",
          icon: InstagramIcon,
        },

        {
          mail: "baranwal.1@iitj.ac.in",
          icon: EmailIcon
        },
        {
          url: "https://www.linkedin.com/in/aadityabaranwal",
          icon: LinkedinIcon
        }
      
        
      ],
    },]
  };
  const team5 = {
    heading: "PR & Marketing",
    // subheading: "Our Team",
    cards: [
     
      {
        imageSrc: xyzw ,
        position: "Head",
        name: "Shashank Chauhan",
        links: [
          {
            url: "https://www.instagram.com/_.shashank._.25._/",
            icon: InstagramIcon,
          },
          {
            mail: "chauhan.19@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/shashank-chauhan-b602b9209",
            icon: LinkedinIcon
          }
        ],
      },
      
      {
        imageSrc: a7,
        position: "Head",
        name: "Aradhya Giri",
        links: [
          {
            url: "https://www.instagram.com/ara_dhyagiri?igsh=OG94NmwxcGxidnlx",
            icon: InstagramIcon,
          },
          {
            mail: "m23msa014@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/aradhyagiri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: LinkedinIcon
          }
        ],
      },
      
    
      
    ],
    cards_ah:[
       {
        imageSrc: a5,
        position: "Assistant Head",
        name: "Paramita Paul",
        links: [
          {
            url: "https://www.instagram.com/pyaari_mita?igsh=MW82MnMybGFmaDN5ZA==",
            icon: InstagramIcon,
          },
          {
            mail: "M23id1008@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/paramita-paul-8495a6229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: LinkedinIcon
          }
          
        ],
      },
      {
        imageSrc: vs ,
        position: "Assistant Head",
        name: "Viswanadhapalli Sujay",
        links: [
          {
            url: "https://www.instagram.com/btwits_sujay?igsh=MW1pa3BybnJjeXBidg%3D%3D&utm_source=qr",
            icon: InstagramIcon,
          },
          {
            mail: "b22cs063@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/viswanadhapalli-sujay-a9761125a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            icon: LinkedinIcon
          }
        ],
      },
      {

        imageSrc: a8,
        position: "Assistant Head",
        name: "Shatakshi Goel",
        links: [
          {
            url: "https://www.instagram.com/shatakshi_1903?igsh=MWRsaWV1NGxlOGptMg==",
            icon: InstagramIcon,
          },
          {
            mail: "b22me060@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "www.linkedin.com/in/ shatakshi-goel-5a7",
            icon: LinkedinIcon
          }
          
        ],
      },
      {
        imageSrc: a9,
        position: "Assistant Head",
        name: "Banoth.Sri Kowshika Raj",
        links: [
          {
            url: "https://www.instagram.com/kowshika_raj_?igsh=MWYyeXlqcXFuaWk0cQ==",
            icon: InstagramIcon,
          },
          {
            mail: "b22cs018@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/sri-kowshika-raj-banoth-b49a7b25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: LinkedinIcon
          }
          
        ],
      },
      {
        imageSrc: a10,
        position: "Assistant Head",
        name: "Yogesh Sharma",
        links: [
          {
            url: "https://www.instagram.com/real.yogesh_?igsh=MWoyNzZtdWV4eWpyeg==",
            icon: InstagramIcon,
          },
          {
            mail: "b22ch045@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/yogesh-sharma-a4bb59258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: LinkedinIcon
          }
          
        ],
      },

      {
        imageSrc: tharun,
        position: "Assistant Head",
        name: "Tarun Prajapati",
        links: [
          {
            url: "https://www.instagram.com/tarun.py?igsh=MWxtcWMxbjF3ZWtnbw",
            icon: InstagramIcon,
          },
          {
            mail: "g23ai1061@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/tarun-prajapati-243797119",
            icon: LinkedinIcon
          }
          
        ],
      },

    ]
    
  };
  const team6 = {
    heading: "Resources",
    // subheading: "Our Team",
    cards: [
      {
        imageSrc: aa,
        position: "Head",
        name: "Bhanu Pratap Mandovra",
        links: [
          {
            url: "https://www.instagram.com/pratap_mandovra?igsh=a3hhaW0yNWw2eHB3&utm_source=qr",
            icon: InstagramIcon,
          },
 
          {
            mail: "mandovra.1@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/bhanu-pratap-mandovra-a46115256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: LinkedinIcon
          }
          
        ],
      },
      
      
    ],
    cards_ah:[
      {
        imageSrc: abh,
        position: "Assistant Head",
        name: "Abhay Kashyap",
        links: [
          {
            url: "https://www.instagram.com/abhikashyap674?igsh=MWUyaWV5N3UweTBoYw==",
            icon: InstagramIcon,
          },
 
          {
            mail: "b22cs001@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/abhay-kashyap-922a05256/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B6owqHMOzQcuVOnVMWakFxA%3D%3D",
            icon: LinkedinIcon
          }
        ],
      },
      {
        imageSrc: harsh,
        position: "Assistant Head",
        name: "Harsh Agarwal",
        links: [
          {
            url: "https://www.instagram.com/harsh_agg_28?igsh=amxqaGNqc2Z0cnVu",
            icon: InstagramIcon,
          },
 
          {
            mail: "harshagarwal2873@gmail.com",
            icon: EmailIcon
          },
          {
            url: "https://www.linkedin.com/in/harsh-agarwal-5a5911255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: LinkedinIcon
          }
 
        ],
      },
    ]
    
  };
 
  
  return (
    <AnimationRevealPage>
      <Header color="orange" />

       <TeamCard heading={team0.heading}
        subheading={team0.subheading}
        description={team0.description}
        cards={team0.cards}
         />

      <TeamCard heading={team1.heading}
        subheading={team1.subheading}
        description={team1.description}
        cards={team1.cards} 
        cards_ah={team1.cards_ah}/>

      <TeamCard heading={team2.heading}
        subheading={team2.subheading}
        description={team2.description}
        cards={team2.cards} 
        cards_ah={team2.cards_ah}/>

      <TeamCard heading={team3.heading}
        subheading={team3.subheading}
        description={team3.description}
        cards={team3.cards}
        cards_ah={team3.cards_ah} />
      
      <TeamCard heading={team5.heading}
        subheading={team5.subheading}
        description={team5.description}
        cards={team5.cards} 
        cards_ah={team5.cards_ah}/>

      <TeamCard heading={team6.heading}
        subheading={team6.subheading}
        description={team6.description}
        cards={team6.cards} 
        cards_ah={team6.cards_ah}/> 


        <TeamCard heading={team4.heading}
        subheading={team4.subheading}
        description={team4.description}
        cards={team4.cards}
        cards_ah={team4.cards_ah} />


      <Footer />
    </AnimationRevealPage>
  );
  }

export default Team;
 
 