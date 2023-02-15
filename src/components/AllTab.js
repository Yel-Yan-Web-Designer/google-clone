import React from 'react'

const AllTab = ({data}) => {

  return (
    <div className='grid gap-6'>
          {data?.items?.map(item => (
            <div key={item.title}>
              <a href={item.link} className='text-black dark:text-neutral-300'>
                {item.displayLink}
              </a>
              <a href={item.link} className='text-blue-700'><h2 className='text-xl font-semibold'>{item.title}</h2></a>
              <p className='text-black dark:text-gray-300'>{item?.snippet}</p>
            </div>
          ))}
    </div>
  )
}

export default AllTab;

/*
                {item.pagemap?.cse_image?.length > 0 && 
                  <img 
                    src={item.pagemap?.cse_image[0]?.src}
                    className='w-56 h-32 md:w-2/5 md:h-4/5'
                    />
                } 
*/