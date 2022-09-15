import React, { useEffect } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {

  const toggleMode = () => {
    if (localStorage.theme === undefined) {
      document.documentElement.classList.add('dark')
    }
    localStorage.theme === 'light' ? localStorage.theme = 'dark' : localStorage.theme = 'light';
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", "light")
  }, []);

  return (
    <>
      <div className="flex justify-between items-center py-6 md:py-9 lg:py-11 text-black dark:text-white">
        <p className="text-xl md:text-3xl font-bold">Sudesh Bhat</p>
        <div className="flex gap-4 md:gap-6 lg:gap-8 items-center font-light text-sm md:text-base lg:text-lg">
          <Link to="experience" className="cursor-pointer" smooth={true} duration={1000}>Experience</Link>
          <a
            href="https://drive.google.com/file/d/1z6cqo_rZwmC4fD_NYUTacTLNSJI0rqHs/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <button onClick={toggleMode} className="dark:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="text-gray-700 w-6">
              <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd"></path>
            </svg>
          </button>
          <button onClick={toggleMode} className="hidden dark:flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="text-orange-300 w-7">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
