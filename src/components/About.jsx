import React from "react";
import { Tilt } from "react-tilt";
import {motion} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { properpic, aboutme } from "../assets";
import { faEarth, faMailBulk, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ index, title, icon, percentage }) => (
  <Tilt className='xs:w-[250px] w-full transition-all'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-w-[50px] min-h-[125px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className=' object-contain h-50'
        />
        <h2 className='text-gray text-[15px] font-bold text-center'>
          {percentage}
        </h2>
        <h3 className='text-white text-[20px] font-bold text-center mt-5'>
          {title}
        </h3>
        
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <div className='flex flex-row justify-start items-center mt-5'>
      <div className="w-5/6">
        <motion.div variants={textVariant()}>
          <img src={aboutme} className="w-20 h-20 animate-spin-slow" alt="" />
          <h2 className={styles.sectionHeadText}>Francis Lorenzana</h2>
        </motion.div>
        
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Hello there!, I am Francis Emmanuel Zoren N. Lorenzana, currently taking up Bachelor of Science in Computer Science at the University of the Cordilleras. I was born in Tagudin ang graduated there as STEM graduate.
        </motion.p>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I have an immense passion in programming and things which involves science and math. I'm also enthusiastic, hardworking and hopeful. My dream is to become a programmer that can contribute to the advancement of technologies. 
        </motion.p>
        <motion.div variants={fadeIn("", "", 0.1, 1)} className='flex flex-row justify-start items-center mt-5'>
            <a href='https://www.facebook.com/francis.lorenzana.562/' target='_blank' rel="norefferer">
              <FontAwesomeIcon icon={faFacebook} className='text-[#915EFF] text-2xl mr-5 hover:animate-bounce' />
            </a>
            <a href='https://github.com/fnlorenzanal' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faGithub} className='text-[#915EFF] text-2xl mr-5 hover:animate-bounce' />
            </a>

            {/* link for the accounts */}
            {/* <a href='https://www.instagram.com/rcarbon.ig/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faInstagram} className='text-[#915EFF] text-2xl mr-5 hover:animate-bounce' />
            </a> */}
            {/* <a href='https://twitter.com/rcarbontwt/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faTwitter} className='text-[#915EFF] text-2xl mr-5 hover:animate-bounce' />
            </a> */}
            {/* <a href='https://www.linkedin.com/in/rcarbon/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} className='text-[#915EFF] text-2xl mr-5 hover:animate-bounce' />
            </a> */}
            <p className="text-secondary text-[17px] leading-[30px] mr-5" >|</p>
            <p><FontAwesomeIcon icon={faMap} className='text-[#915EFF] text-xl mr-2' /></p>
            <p className="text-secondary text-[17px] leading-[30px]" >#357 Becques Tagudin, Ilocos Sur</p>
          </motion.div>
          <motion.div variants={fadeIn("", "", 0.1, 1)} className="flex justify-start items-center mt-5">
          <p><FontAwesomeIcon icon={faPhone} className='text-[#915EFF] text-xl mr-2' /></p>
          <p className="text-secondary text-[17px] leading-[30px] mr-5" >09305505546</p>
          <p><FontAwesomeIcon icon={faMailBulk} className='text-[#915EFF] text-xl mr-2' /></p>
          <p className="text-secondary text-[17px] leading-[30px] mr-5" >zorenlorenzana05@gmail.com</p>
          <a href='https://uc-bcf.edu.ph'target='_blank' className="flex"><FontAwesomeIcon icon={faEarth} className='text-[#915EFF] text-xl mr-2' />
          <p className="text-secondary text-[17px] leading-[30px] mr-5" >www.uc-bcf.edu.ph</p></a>
          </motion.div>
      </div>

      <div className="w-1/4">
        <Tilt className="transition-all">
          <motion.img src={properpic} variants={textVariant} className=' w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' />
        </Tilt>
      </div>
      </div>
      
      <div className="mt-10 w-full  object-center text-center items-center">
        <motion.div variants={textVariant()}>
          <p className={styles.heroSubText}>My Skills</p>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] leading-[30px]'
        >
          Currently, These were the skills that I honed throughout the years which composed of soft skills and professional skills
        </motion.p>
      </div>
      <div className='mt-5 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
