import React from 'react'

const About = () => {
  return (
    <div className='py-10 md:py-14 lg:py-16'>
      <p className='text-black dark:text-white text-5xl leading-[62px] text-center'>About</p>
      <p className='text-lg text-black dark:text-white py-5'>
        Hi, I'm a Full-Stack Developer based out of Udupi, India. I create cool web applications using <b>ReactJs, Redux, Saga, Angular, TailwindCSS and Javascript in Front-End, NodeJs, ExpressJs, MongoDB, Postgres, Heroku and AWS in Back-End.</b> I enjoy creating things that live on internet.
      </p>
      <div className='flex items-center gap-2 md:gap-4 py-5'>
        <p className='text-8xl font-bold text-green-600 leading-[62px]'>2+</p>
        <p className='text-xl text-black dark:text-white'>Years of experience. Specialized in building javascript web applications, while ensuring a seamless web experience for end users.</p>
      </div>
      <div className='flex items-center justify-center gap-2 md:gap-5 lg:gap-10 py-2'>
        <div className='cursor-pointer' onClick={() => window.open("https://www.linkedin.com/in/sudesh-bhat-228944140", "_blank")}>
          <svg fill="#16A349" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
          </svg>
        </div>
        <div className='cursor-pointer' onClick={() => window.open("https://github.com/bhatsudesh", "_blank")}>
          <svg fill="#16A349" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
            <path d="M 46.792969 22.089844 L 27.910156 3.207031 C 27.109375 2.402344 26.054688 2 25 2 C 23.945313 2 22.890625 2.402344 22.089844 3.207031 L 18.355469 6.941406 L 22.976563 11.5625 C 24.511719 10.660156 26.511719 10.855469 27.828125 12.171875 C 29.144531 13.488281 29.335938 15.488281 28.433594 17.019531 L 32.976563 21.5625 C 34.511719 20.660156 36.511719 20.855469 37.828125 22.171875 C 39.390625 23.734375 39.390625 26.265625 37.828125 27.828125 C 36.265625 29.390625 33.734375 29.390625 32.171875 27.828125 C 30.855469 26.511719 30.660156 24.511719 31.5625 22.976563 L 27.019531 18.433594 C 26.695313 18.625 26.355469 18.765625 26 18.855469 L 26 31.140625 C 27.722656 31.585938 29 33.136719 29 35 C 29 37.210938 27.210938 39 25 39 C 22.789063 39 21 37.210938 21 35 C 21 33.136719 22.277344 31.585938 24 31.140625 L 24 18.855469 C 23.332031 18.683594 22.695313 18.351563 22.171875 17.828125 C 20.855469 16.511719 20.664063 14.511719 21.566406 12.980469 L 16.941406 8.355469 L 3.207031 22.089844 C 1.597656 23.695313 1.597656 26.304688 3.207031 27.910156 L 22.089844 46.792969 C 22.890625 47.597656 23.945313 48 25 48 C 26.054688 48 27.109375 47.597656 27.910156 46.792969 L 46.792969 27.910156 C 48.402344 26.304688 48.402344 23.695313 46.792969 22.089844 Z" />
          </svg>
        </div>
        <div className='cursor-pointer' onClick={() => window.open("https://www.instagram.com/bhatsudesh/", "_blank")}>
          <svg fill="#16A349" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
            <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default About