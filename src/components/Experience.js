import React, { useState } from 'react'

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(1);

  return (
    <section id="experience" className='py-10 md:py-14 lg:py-16'>
      <p className='text-black dark:text-white text-5xl leading-[62px] text-center'>Experience</p>
      <div className='py-6 md:py-9 lg:py-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10'>
        <div className={`${activeExperience === 1 && "border-b-4 border-green-600"} p-6 md:p-8 lg:p-10 bg-gray-200 dark:bg-gray-700 cursor-pointer rounded-md`} onClick={() => setActiveExperience(1)}>
          <p className='text-green-600 font-bold text-xl lg:text-2xl pb-2'>Pixel8 LLC</p>
          <p className='text-gray-700 dark:text-gray-400 font-semibold text-lg lg:text-xl py-1'>Full Stack Developer</p>
          <p className='text-gray-700 dark:text-gray-400 font-medium text-base lg:text-lg'>OCT 2021 - Present</p>
        </div>
        {
          activeExperience === 1
            ? (
              <div className='block md:hidden'>
                <p className='text-black dark:text-white text-lg md:text-xl font-semibold'>Responsibilities</p>
                <ul style={{ "list-style-type": "disc" }} className='py-2 pl-6'>
                  <li className='py-1 text-black dark:text-white text-lg'>Worked on building the challenging front-end.</li>
                  <li className='py-1 text-black dark:text-white text-lg'>Developed and deployed web applications from scratch to finish.</li>
                  <li className='py-1 text-black dark:text-white text-lg'>Getting insight on block chain and NFT.</li>
                  <li className='py-1 text-black dark:text-white text-lg'>Mainly used <b>react, redux saga, nodejs, postgresql, heroku, tailwind css and scss</b>.</li>
                </ul>
              </div>
            )
            : null
        }
        <div className={`${activeExperience === 2 && "border-b-4 border-green-600"} p-6 md:p-8 lg:p-10 bg-gray-200 dark:bg-gray-700 cursor-pointer rounded-md`} onClick={() => setActiveExperience(2)}>
          <p className='text-green-600 font-bold text-xl lg:text-2xl pb-2'>Lotus Analytics</p>
          <p className='text-gray-700 dark:text-gray-400 font-semibold text-lg lg:text-xl py-1'>Full Stack Developer</p>
          <p className='text-gray-700 dark:text-gray-400 font-medium text-base lg:text-lg'>OCT 2020 - OCT 2021</p>
        </div>
        {
          activeExperience === 2
            ? (
              <div className='block md:hidden'>
                <p className='text-black dark:text-white text-lg md:text-xl font-semibold'>Responsibilities</p>
                <ul style={{ "list-style-type": "disc" }} className='py-2 pl-6'>
                  <li className='py-1 text-black dark:text-white text-lg'>Ability to understand and apply new knowledge quickly.</li>
                  <li className='py-1 text-black dark:text-white text-lg'>Responsible for building performant web applications.</li>
                  <li className='py-1 text-black dark:text-white text-lg'>Commitment to test driven development in an agile environment.</li>
                  <li className='py-1 text-black dark:text-white text-lg'>Mainly used <b>react, redux saga, micro-frontend, nodejs, postgresql, aws, material-ui and scss</b>.</li>
                </ul>
              </div>
            )
            : null
        }
        <div className={`${activeExperience === 3 && "border-b-4 border-green-600"} p-6 md:p-8 lg:p-10 bg-gray-200 dark:bg-gray-700 cursor-pointer rounded-md`} onClick={() => setActiveExperience(3)}>
          <p className='text-green-600 font-bold text-xl lg:text-2xl pb-2'>Practiskills Pvt Ltd</p>
          <p className='text-gray-700 dark:text-gray-400 font-semibold text-lg lg:text-xl py-1'>React Node Developer</p>
          <p className='text-gray-700 dark:text-gray-400 font-medium text-base lg:text-lg'>JAN 2020 - OCT 2020</p>
        </div>
        {
          activeExperience === 3
            ? (
              <div className='block md:hidden'>
                <p className='text-black dark:text-white text-lg md:text-xl font-semibold'>Responsibilities</p>
                <ul style={{ "list-style-type": "disc" }} className='py-2 pl-6'>
                  <li className='py-1 text-black dark:text-white text-lg'>Part of core development team of <b><a href="https://www.practiskills.com/">Practiskills.com</a></b>.</li>
                  <li className='py-1 text-black dark:text-white text-lg'>Built multiple reusable components.</li>
                  <li className='py-1 text-black dark:text-white text-lg'>Responsible for writing good quality and neat codes.</li>
                  <li className='py-1 text-black dark:text-white text-lg'>Mainly used <b>nodejs, mongodb, expressjs, fastify, react and tailwind css</b>.</li>
                </ul>
              </div>
            )
            : null
        }
      </div>
      <div className='hidden md:block'>
        <p className='text-black dark:text-white text-lg md:text-xl font-semibold'>Responsibilities</p>
        {
          activeExperience === 1
            ? (
              <ul style={{ "list-style-type": "disc" }} className='py-2 pl-6'>
                <li className='py-1 text-black dark:text-white text-lg'>Worked on building the challenging front-end.</li>
                <li className='py-1 text-black dark:text-white text-lg'>Developed and deployed web applications from scratch to finish.</li>
                <li className='py-1 text-black dark:text-white text-lg'>Getting insight on block chain and NFT.</li>
                <li className='py-1 text-black dark:text-white text-lg'>Mainly used <b>react, redux saga, nodejs, postgresql, heroku, tailwind css and scss</b>.</li>
              </ul>
            )
            : null
        }
        {
          activeExperience === 2
            ? (
              <ul style={{ "list-style-type": "disc" }} className='py-2 pl-6'>
                <li className='py-1 text-black dark:text-white text-lg'>Ability to understand and apply new knowledge quickly.</li>
                <li className='py-1 text-black dark:text-white text-lg'>Responsible for building performant web applications.</li>
                <li className='py-1 text-black dark:text-white text-lg'>Commitment to test driven development in an agile environment.</li>
                <li className='py-1 text-black dark:text-white text-lg'>Mainly used <b>react, redux saga, micro-frontend, nodejs, postgresql, aws, material-ui and scss</b>.</li>
              </ul>
            )
            : null
        }
        {
          activeExperience === 3
            ? (
              <ul style={{ "list-style-type": "disc" }} className='py-2 pl-6'>
                <li className='py-1 text-black dark:text-white text-lg'>Part of core development team of <b><a href="https://www.practiskills.com/">Practiskills.com</a></b>.</li>
                <li className='py-1 text-black dark:text-white text-lg'>Built multiple reusable components.</li>
                <li className='py-1 text-black dark:text-white text-lg'>Responsible for writing good quality and neat codes.</li>
                <li className='py-1 text-black dark:text-white text-lg'>Mainly used <b>nodejs, mongodb, expressjs, fastify, react and tailwind css</b>.</li>
              </ul>
            )
            : null
        }
      </div>
    </section>
  )
}

export default Experience