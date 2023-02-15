import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import {CgProfile} from 'react-icons/cg';
import {TbGridDots} from 'react-icons/tb';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {RiSunFill} from 'react-icons/ri';

const Home = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='flex flex-col gap-y-24 min-h-screen dark:bg-gray-800'>

      <div className="flex justify-between items-center p-5">
        <div className="flex gap-x-3.5 items-center">
          <Link to='/about' className='hover:underline dark:text-white text-black'>About</Link>
          <Link to='/store' className='hover:underline dark:text-white text-black'>Store</Link>
          <div className='py-1 px-2.5 rounded-full bg-gray-600 text-white dark:text-black dark:bg-white shadow-md dark:shadow-none cursor-pointer select-none' onClick ={() => setDarkTheme(!darkTheme)}>{darkTheme ? <RiSunFill/> : <BsFillMoonStarsFill/>}
          </div>
        </div>

        <div className="flex gap-x-5 items-center">
          <Link to='/gmail' className='hover:underline dark:text-white text-black'> Gmail</Link>
          <Link to='/images' className='hover:underline dark:text-white text-black'>Images</Link>
          <Link to='/images' className='hover:underline dark:text-white text-black'><TbGridDots className='text-2xl'/></Link>
          <Link to='/images' className='dark:text-white text-black cursor-pointer'><CgProfile className='text-2xl'/></Link>
        </div>

      </div>
      <div className="flex flex-col flex-1 gap-y-8 justify-start items-center">
        <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='google logo' className='w-2/5 h-2/5 md:w-1/5 md:h-1/5 mx-auto '/>
        <Search/>
      </div>

    </div>
  )
}

export default Home;