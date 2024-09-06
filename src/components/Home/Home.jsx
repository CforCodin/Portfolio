import React from 'react'
import avatarImg from '../../assets/7358602-removebg-preview.png'
import TextChange from '../TextChange';

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
            <TextChange/>
        </h1>
        <p className='text-sm md:text-2xl tracking-tight mt-5'>I am a software developer and data analyst who is passionate about creating technology to elevate people and
             help them reach their goals.<br/>Scroll down to learn more about my skills and projects I have worked on.
              </p>
              <button
  className='bg-[#465697] text-sm md:text-lg md:py-2 md:px-4 text-white px-3 py-2 mt-5 md:md-10 rounded-3xl hover:opacity-85 duration-300 hover:scale-105 font-semibold'
  onClick={() => window.open('https://www.linkedin.com/in/your-profile/', '_blank')}>

           Contact Me
           </button>

        </div>
        <div>
            <img className='' src={avatarImg} alt=''/>
        </div>
    </div>)
}
export default Home;