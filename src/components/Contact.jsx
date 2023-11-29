import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEarth, faMailBulk, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_f1detxb',
        'template_wdbmoum',
        {
          from_name: form.name,
          to_name: "Francis Lorenzana",
          from_email: form.email,
          to_email: "contact@rcarbon.me",
          message: form.message,
        },
        'GrgWoR1wzv4__j2Fh'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <motion.div variants={fadeIn("", "", 0.1, 1)} className='flex flex-row justify-start items-center mt-5'>
            <a href='https://www.facebook.com/francis.lorenzana.562/' target='_blank' rel="norefferer">
              <FontAwesomeIcon icon={faFacebook} className='text-[#915EFF] text-2xl mr-5 hover:animate-bounce' />
            </a>
            <a href='https://github.com/fnlorenzana' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faGithub} className='text-[#915EFF] text-2xl mr-5 hover:animate-bounce' />
            </a>
            {/* links for the accounts
            <a href='https://www.instagram.com/rcarbon.ig/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faInstagram} className='text-[#915EFF] text-2xl mr-5 hover:animate-bounce' />
            </a>
            <a href='https://twitter.com/rcarbontwt/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faTwitter} className='text-[#915EFF] text-2xl mr-5 hover:animate-bounce' />
            </a>
            <a href='https://www.linkedin.com/in/rcarbon/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} className='text-[#915EFF] text-2xl mr-5 hover:animate-bounce' />
            </a> */}
            <p className="text-secondary text-[17px] leading-[30px] mr-5" >|</p>
            <p><FontAwesomeIcon icon={faMap} className='text-[#915EFF] text-xl mr-2' /></p>
            <p className="text-secondary text-[17px] leading-[30px]" >#357 Becques Tagudin, Ilocos Sur</p>
          </motion.div>
          <motion.div variants={fadeIn("", "", 0.1, 1)} className="flex justify-start items-center mt-5">
          <p><FontAwesomeIcon icon={faPhone} className='text-[#915EFF] text-xl mr-2' /></p>
          <p className="text-secondary text-[17px] leading-[30px] mr-5" >+630 550 5546</p>
          <p><FontAwesomeIcon icon={faMailBulk} className='text-[#915EFF] text-xl mr-2' /></p>
          <p className="text-secondary text-[17px] leading-[30px] mr-5" >zorenlorenzana05@gmail.com</p>
          <a href='https://uc-bcf.edu.ph'target='_blank' className="flex"><FontAwesomeIcon icon={faEarth} className='text-[#915EFF] text-xl mr-2' />
          <p className="text-secondary text-[17px] leading-[30px] mr-5" >www.uc-bcf.edu.ph</p></a>
          </motion.div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your e-mail</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your e-mail address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
