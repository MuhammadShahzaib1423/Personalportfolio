// import React, { useState } from "react";
import bgimage1 from '../assets/bg/hero_bg_4.png'
import bgimage2 from '../assets/bg/hero_bg_2.png'
const About = () => {
//   const [activeTab, setActiveTab] = useState("about"); // Default tab: About Me

  return (
    // <div className=" mx-auto mt-10 p-6">
    
    //   <div className="flex justify-center space-x-4 mb-6">
    //     <button
    //       className={`px-4 py-2 rounded-lg ${
    //         activeTab === "about" ? "bg-blue-600 text-white" : "bg-gray-300"
    //       }`}
    //       onClick={() => setActiveTab("about")}
    //     >
    //       About Me
    //     </button>
    //     <button
    //       className={`px-4 py-2 rounded-lg ${
    //         activeTab === "skills" ? "bg-blue-600 text-white" : "bg-gray-300"
    //       }`}
    //       onClick={() => setActiveTab("skills")}
    //     >
    //       Skills
    //     </button>
    //     <button
    //       className={`px-4 py-2 rounded-lg ${
    //         activeTab === "experience" ? "bg-blue-600 text-white" : "bg-gray-300"
    //       }`}
    //       onClick={() => setActiveTab("experience")}
    //     >
    //       Experience
    //     </button>
    //   </div>

    //   {activeTab === "about" && (
    //     <div>
    //       <h2 className="text-2xl font-bold mb-4">My Story</h2>
    //       <p className="text-gray-700">
    //         I am a frontend web developer based in Rawalpindi. I build all kinds of
    //         websites that scale up company businesses and meet their needs.
    //       </p>
    //       <p className="text-gray-700 mt-2">
    //         I have been passionate about web development since I was 18 years old.
    //       </p>
    //     </div>
    //   )}

    //   {activeTab === "skills" && (
    //     <div>
    //       <h2 className="text-2xl font-bold mb-4">Skills</h2>
    //       <p className="text-gray-700">
    //         Here are some of my technical skills and expertise.
    //       </p>
    //       <ul className="mt-4">
    //         <li className="mb-2">Adobe Photoshop - 80%</li>
    //         <li className="mb-2">HTML / CSS - 95%</li>
    //         <li className="mb-2">JavaScript - 88%</li>
    //       </ul>
    //     </div>
    //   )}

      
    //   {activeTab === "experience" && (
    //     <div>
    //       <h2 className="text-2xl font-bold mb-4">Experience</h2>
    //       <p className="text-gray-700">My professional work history.</p>
    //       <ul className="mt-4">
    //         <li className="mb-2">
    //           <strong>Art & Creative Director</strong> (2014-2015) - Google Inc.
    //         </li>
    //         <li className="mb-2">
    //           <strong>Frontend Developer</strong> (2015-2017) - Google Inc.
    //         </li>
    //         <li className="mb-2">
    //           <strong>UI/UX Designer</strong> (2018-2020) - Google Inc.
    //         </li>
    //       </ul>
    //     </div>
    //   )}
    // </div>
    <>
    <section className=''>

        <div className="h-[50vh]" style={{ backgroundImage: `url(${bgimage1}) ` }}>
        <h1 className="text-9xl text-center font-bold bg-gradient-to-r from-[#342ead] to-[#ff6d5a] text-transparent bg-clip-text py-40">
  About Me
</h1>


       
<div className='container px-40 py-15 mx-auto flex justify-between  space-x-20 '>
    <div>
<img src={bgimage2} alt="" />
    </div>
    <div>
       <div>
        <h1 className='md:text-4xl text-3xl text-blue-900 font-bold mb-4'>
            I <span className='text-[#ff6d5a]'> develop websites  </span>that scale up businesses
        </h1>
        <p className='text-[#B5B5c0] text-lg'>
        I am a Frontend Web Developer passionate about creating responsive, user-friendly, and visually appealing web applications. I specialize in modern frontend technologies, ensuring seamless user experiences through clean code and innovative designs.
        </p>
        </div> 
        <div className='Summary mt-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#342ead]'> In Summary</h2>

            <h3 className='text-[#B5B5c0]'>Current Location</h3>
            <p>USA</p>
           

        </div>
         </div>
</div>
        </div>
    </section>
    </>
  );
};

export default About;
