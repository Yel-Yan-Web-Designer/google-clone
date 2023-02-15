import React from 'react'

const ImagesTab = ({data}) => {

  
  return (
    <div className='flex flex-wrap gap-y-5 gap-x-1 md:gap-x-0'>
      {data?.items?.map(item => (
        <a href={item.link} key={item.title} className='cursor-pointer'>{item?.pagemap?.cse_image?.length > 0 && 
          <img src={item?.pagemap?.cse_image[0].src} className='w-screen h-32 md:w-4/5 md:h-52' alt='this image is not avaiable in your country'/>
        }</a>
      ))}
    </div>
  )
}

export default ImagesTab