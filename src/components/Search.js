import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
import {AiOutlineSearch} from 'react-icons/ai';
import {ImMic} from 'react-icons/im';
import { useStateValue } from '../api/Contextapi';
import { actionTypes } from '../api/reducer';

const Search = ({hidebuttons = false}) => {
  // get user's info from input
  const [inputValue, setInputValue] = useState('');
  // put user's info into data layer
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();
  
  function searchInfo (e) {
    e.preventDefault();


    dispatch({
      type : actionTypes.SET_SEARCH_TERM,
      term : inputValue
    })
    // do something with inputValue
    navigate('/search');
  }

  return (
    <form className='flex flex-col gap-y-10'>
      <div className='flex items-center rounded-full mx-auto py-2 px-5 gap-x-3.5 bg-white inputBox' style={{ boxShadow : '0 1px 6px 0 #20212451'}}>
        <div className="text-2xl"><AiOutlineSearch/></div>
        <input 
          placeholder='Search Google or type a URL' 
          className='flex-1 w-full py-1 px-1.5 '
          value = {inputValue}
          onChange = {(e) => setInputValue(e.target.value)}  
        />
        <div className=""><ImMic className='text-sky-500 text-2xl'/></div>
      </div>

      { !hidebuttons ? 
      (
        <div className='flex gap-x-8 mx-auto'>
          <button className='hover:bg-gray-200 py-2 px-4 dark:text-white text-black dark:hover:text-black' type='submit' onClick={searchInfo}>Google search</button>
          <button className='hover:bg-gray-200 py-2 px-4 dark:text-white text-black dark:hover:text-black'>I'm Feeling lucky</button>
        </div>
      ) : (
        <div className='flex gap-x-8 mx-auto hidden'>
          <button className='hover:bg-gray-200 py-2 px-4 dark:text-white text-black dark:hover:text-black' type='submit' onClick={searchInfo}>Google search</button>
          <button className='hover:bg-gray-200 py-2 px-4 dark:text-white text-black dark:hover:text-black'>I'm Feeling lucky</button>
      </div>
      )
    }
    </form>
  )
}

export default Search;