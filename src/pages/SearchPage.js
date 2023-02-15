import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useStateValue } from '../api/Contextapi';
import useGoogleSearch from '../api/useGoogleSearch';
import Response from '../api/response';

import Search from '../components/Search';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {RiSunFill} from 'react-icons/ri';
import {AiOutlineSearch} from 'react-icons/ai';
import { RiVideoLine } from 'react-icons/ri';
import { BsCardImage } from 'react-icons/bs';
import {BiNews} from 'react-icons/bi';
import { BsFillTagFill } from 'react-icons/bs';
import {GrMoreVertical} from 'react-icons/gr';

import {AllTab, ImagesTab, NewsTab} from '../components/index';

const SearchPage = ({darkTheme, setDarkTheme}) => {
  const [state, dispatch] = useStateValue();
  const [currentTab, setCurrentTab] = useState('1'); // for tabs

  //LIVE API CALL
  const {data} = useGoogleSearch(state.term);

 // const data = Response; // MOCK API CALL
  const categories = [
    {id: 1, name : 'All', icon : <AiOutlineSearch className='dark:text-white pointer-events-none'/>, tabResult : <AllTab data={data}/>},
    {id : 2, name : 'Images', icon :  <BsCardImage className='dark:text-white pointer-events-none'/>, tabResult : <ImagesTab data={data}/> },
    {id : 3, name : 'News', icon : <BiNews className='dark:text-white pointer-events-none'/>,tabResult : <NewsTab data={data}/> }
  ]

  function handleTabs (e) {
    setCurrentTab(e.target.id);
  }

  // GET FULL YEAR FOR FOOTER
  let currentYear = new Date().getFullYear();

  return (
    <div className='dark:bg-gray-900 h-full'>
      <div className="p-5 md:pb-1 z-50 flex flex-col md:flex-row items-start gap-y-5 md:gap-y-0 gap-x-1 md:gap-x-8" style={{borderBottom : '1px solid lightgray'}}>
        <Link to='/'>
          <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='google logo' 
            className='h-9'/>
        </Link>
        <div>
          <Search hidebuttons/>

          <div className="flex flex-col md:flex-row justify-between mt-2">
            <div className="flex items-center gap-4 md:gap-x-4 mb-2 md:mb-0 flex-wrap">  
            {categories.map(x => {
              let {id, name, icon} = x;
              return (
                <button 
                  id ={id}
                  key={name} 
                  disabled = {currentTab === `${id}`}
                  onClick = {handleTabs}
                  className='flex items-center gap-x-1'
                >
                  {icon}
                  <h4 className='text-gray-600 dark:text-white pointer-events-none'>{name}</h4>
                </button>
              )
            })}
            </div>
            <div className="flex items-center gap-x-2">
              <button className='text-gray-600 dark:text-white p-3'>Tools</button>
            </div>
          </div>
        </div>
        {/* toggle lignt & dark mode */}
        <div className='md:ml-auto py-1 px-2.5 rounded-full bg-gray-600 text-white dark:text-black dark:bg-white shadow-md dark:shadow-none cursor-pointer select-none toggle-btn' onClick ={() => setDarkTheme(!darkTheme)}>{darkTheme ? <RiSunFill/> : <BsFillMoonStarsFill/>}
        </div>
      </div>
      {/* SEARCH RESULTS */}
      {state.term && (
        <div className='md:ml-40 grid gap-y-5 px-5 md:px-0'>
          <p className='text-gray-500 dark:text-gray-300 mt-1'>About {data?.searchInformation?.formattedSearchTime} results ({data?.searchInformation?.formattedSearchTime}seconds) for {state.term}</p>
          {categories.map(({id, name, tabResult}) => (
            <div key={name} className={currentTab === `${id}` ? 'block' : 'hidden'}>
              {currentTab === `${id}` && 
                <div>{tabResult}</div>
              }
            </div>
          ))} 

        </div>
      )}

      {/* FOOTER */}
      <footer className='text-black dark:text-white p-8 text-center mt-8' style={{borderTop : '1px solid lightgray'}}>
        <h3>Google Clone By <span className='text-slate-500 font-bold'>Yel Yan</span> {currentYear}</h3>
      </footer>
    </div>
  )
}

export default SearchPage;

// https://cse.google.com/cse/create/new

