import React from 'react';
import ReactGA from "react-ga4";

import sudesh from '../images/sudesh.JPG';

const HeroSection = () => {
  const sendEvent = (category, action, label) => {
    // Send a custom event
    ReactGA.event({
      category: category,
      action: action,
      label: label, // optional
      value: 1
    });
  };
  return (
    <>
      <div className='flex flex-col md:flex-row gap-5 justify-between items-center py-10 md:py-14 lg:py-16'>
        <div className=''>
          <p className='text-5xl text-black dark:text-white leading-[62px]'>Hi, I am<br /> Sudesh Bhat</p>
          <p className='text-base text-gray-500 py-2'>Full-Stack Developer</p>
          <div className='flex gap-4 items-center pt-5'>
            <a
              href="https://drive.google.com/file/d/1bd_lr7n0MK0RcDrZzA01V3DuOFr6CK2L/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <button onClick={() => sendEvent('Button', 'Click', 'resume')} className='bg-green-600 py-2 px-4 text-white text-sm tracking-wide'>Download CV</button>
            </a>
            <a href="mailto:sudeshbhat2113@gmail.com">
              <button className='text-sm border border-black dark:border-white text-black dark:text-white tracking-wide py-2 px-8'>
                Contact
              </button>
            </a>
          </div>
        </div>
        <div className='hidden md:block'>
          <img src={sudesh} alt="sudesh" className='rounded-full w-80 h-80 md:w-[500px] md:h-[500px] bg-no-repeat shadow-lg shadow-slate-500 dark:shadow-slate-700' />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
