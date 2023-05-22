import React, { useState } from 'react'

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(1);

  const experience1 = [
    'Worked on building the front-end and back-end of the core platform.',
    'Ability to understand and apply new knowledge quickly.',
    'Commitment to test driven development in an agile environment.',
    `Mainly used - react, redux, angular, google analytics,  nodejs, mongoDB, html, css.`
  ];

  const experience2 = [
    'Worked on building the challenging front-end.',
    'Developed web applications from scratch to finish.',
    'Getting insight on block chain and NFT.',
    'Mainly used - react, redux saga, nodejs, postgresql, heroku, tailwind css and scss.'
  ];

  const experience3 = [
    'Worked on building the front-end and back-end of the core platform.',
    'Responsible for writing good quality and neat codes.',
    'Responsible for building performant web applications.',
    'Mainly used - react, redux saga, micro-frontend,  nodejs, postgresql, aws, material-ui and scss.'
  ]

  return (
    <section id="experience" className='py-10 md:py-14 lg:py-16'>
      <p className='text-black dark:text-white text-5xl leading-[62px] text-center'>Experience</p>
      <div className='py-6 md:py-9 lg:py-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10'>
        <div className={`${activeExperience === 1 && "border-b-4 border-green-600"} p-6 md:p-8 lg:p-10 bg-gray-200 dark:bg-gray-700 cursor-pointer rounded-md`} onClick={() => setActiveExperience(1)}>
          <p className='text-green-600 font-bold text-xl lg:text-2xl pb-2'>UST Global</p>
          <p className='text-gray-700 dark:text-gray-400 font-semibold text-lg lg:text-xl py-1'>Software Developer |||</p>
          <p className='text-gray-700 dark:text-gray-400 font-medium text-base lg:text-lg'>SEP 2021 - Present</p>
        </div>
        {
          activeExperience === 1
            ? (
              <div className='block md:hidden'>
                <p className='text-black dark:text-white text-lg md:text-xl font-semibold'>Responsibilities</p>
                <ul style={{ "listStyleType": "disc" }} className='py-2 pl-6'>
                  {
                    experience1.map((item, index) => (
                      <li className='py-1 text-black dark:text-white text-lg' key={index}>{item}</li>
                    ))
                  }
                </ul>
              </div>
            )
            : null
        }
        <div className={`${activeExperience === 2 && "border-b-4 border-green-600"} p-6 md:p-8 lg:p-10 bg-gray-200 dark:bg-gray-700 cursor-pointer rounded-md`} onClick={() => setActiveExperience(2)}>
          <p className='text-green-600 font-bold text-xl lg:text-2xl pb-2'>Pixel8 LLC</p>
          <p className='text-gray-700 dark:text-gray-400 font-semibold text-lg lg:text-xl py-1'>Full Stack Developer</p>
          <p className='text-gray-700 dark:text-gray-400 font-medium text-base lg:text-lg'>OCT 2021 - SEP 2022</p>
        </div>
        {
          activeExperience === 2
            ? (
              <div className='block md:hidden'>
                <p className='text-black dark:text-white text-lg md:text-xl font-semibold'>Responsibilities</p>
                <ul style={{ "listStyleType": "disc" }} className='py-2 pl-6'>
                  {
                    experience2.map((item, index) => (
                      <li className='py-1 text-black dark:text-white text-lg' key={index}>{item}</li>
                    ))
                  }
                </ul>
              </div>
            )
            : null
        }
        <div className={`${activeExperience === 3 && "border-b-4 border-green-600"} p-6 md:p-8 lg:p-10 bg-gray-200 dark:bg-gray-700 cursor-pointer rounded-md`} onClick={() => setActiveExperience(3)}>
          <p className='text-green-600 font-bold text-xl lg:text-2xl pb-2'>Lotus Analytics</p>
          <p className='text-gray-700 dark:text-gray-400 font-semibold text-lg lg:text-xl py-1'>Full Stack Developer</p>
          <p className='text-gray-700 dark:text-gray-400 font-medium text-base lg:text-lg'>OCT 2020 - OCT 2021</p>
        </div>
        {
          activeExperience === 3
            ? (
              <div className='block md:hidden'>
                <p className='text-black dark:text-white text-lg md:text-xl font-semibold'>Responsibilities</p>
                <ul style={{ "listStyleType": "disc" }} className='py-2 pl-6'>
                  {
                    experience3.map((item, index) => (
                      <li className='py-1 text-black dark:text-white text-lg' key={index}>{item}</li>
                    ))
                  }
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
              <ul style={{ "listStyleType": "disc" }} className='py-2 pl-6'>
                {
                  experience1.map((item, index) => (
                    <li className='py-1 text-black dark:text-white text-lg' key={index}>{item}</li>
                  ))
                }
              </ul>
            )
            : null
        }
        {
          activeExperience === 2
            ? (
              <ul style={{ "listStyleType": "disc" }} className='py-2 pl-6'>
                {
                  experience2.map((item, index) => (
                    <li className='py-1 text-black dark:text-white text-lg' key={index}>{item}</li>
                  ))
                }
              </ul>
            )
            : null
        }
        {
          activeExperience === 3
            ? (
              <ul style={{ "listStyleType": "disc" }} className='py-2 pl-6'>
                {
                  experience3.map((item, index) => (
                    <li className='py-1 text-black dark:text-white text-lg' key={index}>{item}</li>
                  ))
                }
              </ul>
            )
            : null
        }
      </div>
    </section>
  )
}

export default Experience