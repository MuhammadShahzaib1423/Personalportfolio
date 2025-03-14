import React from 'react';

import bgimage1 from '../assets/bg/hero_bg_2.png';
import bgimage2 from '../assets/bg/hero_bg_3.png';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import mainimg from '../assets/mainimage/mainimg.png';
const Home = () => {
  return (
    <div>
      <section 
  className="min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bgimage1})` }}
>

    <div className='container px-40 py-15 mx-auto flex justify-between items-center  '>

        <div className='space-y-8 w-[50]'>
            <h1 className='text-3xl md:text-5xl text-[#B5B5c0]'> Hi! I'm</h1>
        <h2 
            className="text-3xl font-bold md:text-5xl  text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(147deg, #342ead 0%,rgb(250, 54, 28) 100%)" }}
            >
            Muhammad <br />Shahzaib
            </h2>

        <h3 className='text-[#B5B5c0] text-2xl md:text-3xl font-bold'  >Frontend  <span className='text-[#342ead]'> Web Developer</span></h3>

        <p>I build all kinds of websites that help businesses scale and meet their needs. <br />I specialize in frontend web development, creating responsive and dynamic user interfaces. <br /> Currently, I'm living in Rawalpindi, Pakistan.</p>
        
        <div className='social-icons flex space-x-4 text-3xl md:text-3xl '> 
            <a href='https://www.linkedin.com/in/muhammad-shahzaib-0b1a6a1b8/' target='_blank' rel='noreferrer'>
                <FaInstagram className='text-[#342ead] hover:text-[#ff6d5a]' />
            </a>
            <a href=' https://github.com/MuhammadShahzaib' target='_blank' rel='noreferrer'>
                <FaGithub className='text-[#342ead] hover:text-[#ff6d5a]'  />
                </a>
            <a href='https://www.linkedin.com/in/muhammad-shahzaib-0b1a6a1b8/' target='_blank' rel='noreferrer'>
                <FaLinkedin className='text-[#342ead] hover:text-[#ff6d5a]' />
                </a>
            <a href='https://www.facebook.com/muhammad.shahzaib.923724' target='_blank' rel='noreferrer'>
            <FaFacebook className='text-[#342ead] hover:text-[#ff6d5a]' />
            </a>
                

        </div>
        <div className='flex space-x-4 items-center'>
        <button type="button" className="text-white bg-[#FF6d5A] hover:bg-[#FF6d5A] cursor-pointer hover:scale-110   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download CV</button>
        <a href="" className='text-[#342ead] underline text-xl' > Lets Talk</a>
        </div>
        </div>
        <div 
  className="relative h-[450px] w-[350px] mt-20 bg-cover bg-center"
  style={{ backgroundImage: `url(${bgimage2})` }}
>
  <img 
  
    alt="Inner Image" 
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100px h-30px "
  />
  <div className='flex justify-center items-center space-x-4 absolute top-50 left-57 px-3 bg-white rounded-lg shadow-lg float-animation'> 
    <h1 className='text-[#342ead] text-2xl font-bold'> 1+ </h1>
    <p className='text-black text-lg'>Years of Experience</p>
  </div>
</div>
    </div>

      </section>
    </div>
  );
};

export default Home;
