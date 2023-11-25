import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useGoogleLogin, googleLogout} from '@react-oauth/google';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { getInbox, fetchEmails } from "../hooks";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";


const Receiver = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('isLoggedIn');
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      const access_token = localStorage.getItem('access_token');
      const labelId = 'CATEGORY_PROMOTIONS';
      fetchEmails(access_token, labelId)
        .then(data => setMessages(data))
        .catch(error => console.error(error));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const login = useGoogleLogin({
    include_granted_scopes: true,
    scope: 'https://mail.google.com/',
    onSuccess: (response) => {
      console.log(response);
      localStorage.setItem('access_token', response.access_token);
      const access_token = localStorage.getItem('access_token');
      const labelId = 'CATEGORY_PROMOTIONS';
      getInbox(access_token, labelId)
        .then(data => console.log(data))
        .catch(error => console.error(error));
      setIsLoggedIn(true);
    },
    onFailure: (error) => console.log(error),
  });

  useEffect(() => {
    if (isLoggedIn) {
      refreshEmails();
    }
  }, [isLoggedIn]);

  const refreshEmails = () => {
    const access_token = localStorage.getItem('access_token');
    const labelId = 'CATEGORY_PROMOTIONS';
    fetchEmails(access_token, labelId)
      .then(data => setMessages(data))
      .catch(error => console.error(error));
  };

  return (
    <>
      <div
        className={`xl:mt-12 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "", 0.2, 1)}
          className='bg-black-100 p-8 rounded-2xl'
        >
          {isLoggedIn ? (
            <div>
              <p className={styles.sectionSubText}>Admin Dashboard</p>
              <h3 className={styles.sectionHeadText}>Received Messages</h3>
            </div>
          ) : (
            <div>
              <p className={styles.sectionSubText}>Dashboard</p>
              <h3 className={styles.sectionHeadText}>Login to Admin</h3>
            </div>
          )}
          <div className='mt-5'>
          {isLoggedIn ? (
            <div className='flex flex-row justify-between items-center mt-5 gap-5'>
              <button onClick={() => {googleLogout(); localStorage.removeItem('accessToken'); setIsLoggedIn(false);}} className="w-5/6 text-xl rounded-2xl text-tertiary outline-none bg-white font-bold shadow-md shadow-primary py-5 mx-auto">
                Logout
              </button>
              <button onClick={refreshEmails} className="w-1/6 text-xl rounded-2xl text-tertiary outline-none bg-white font-bold shadow-md shadow-primary py-5">
              <FontAwesomeIcon icon={faArrowsRotate} className='mx-auto' />
              </button>
            </div>
          ) : (
            <button onClick={() => login()} className="w-full text-xl rounded-2xl text-tertiary outline-none bg-white font-bold shadow-md shadow-primary py-5 mx-auto">
              <FontAwesomeIcon icon={faGoogle} className='text-2xl mr-1' /> Sign in with Google
            </button>
          )}
          </div>
        </motion.div>
      </div>
      <div
        className={`mt-8 flex flex-row gap-4`}
      >
          <motion.div
            variants={slideIn("left", "", 0.2, 1)}
            className='w-1/3 bg-black-100 p-8 rounded-2xl'
            >
              <h2 className={styles.sectionHeadText}>SMS/Text</h2>
              {messages.map((message, index) => (
                <div key={index}>
                <p className="mt-5 text-secondary text-[25px] leading-[30px]">{message.content}</p>
              </div>))}
          </motion.div>
          <motion.div
            variants={slideIn("left", "", 0.2, 1)}
            className='w-1/3 bg-black-100 p-8 rounded-2xl'
            >
              <h2 className={styles.sectionHeadText}>Messenger</h2>
              {messages.map((message, index) => (
                <div key={index}>
                <p className="mt-5 text-secondary text-[25px] leading-[30px]">{message.content}</p>
              </div>))}
          </motion.div>
          <motion.div
            variants={slideIn("left", "", 0.2, 1)}
            className='w-1/3 bg-black-100 p-8 rounded-2xl'
            >
              <h2 className={styles.sectionHeadText}>Emails</h2>
              {messages.map((message, index) => (
                <div key={index}>
                <p className="mt-5 text-secondary text-[25px] leading-[30px]">{message.content}</p>
              </div>))}
          </motion.div>
        </div>
    </>
  );
};

export default SectionWrapper(Receiver, "receiver");
