import React from 'react'

const NewsTab = ({data}) => {
 
  return (
    <div className='grid gap-y-7'>
      {data?.items?.map(item => (
        <div key={item.title} className='flex flex-wrap md:flex-nowrap  items-center gap-y-2'>
          <div className="flex flex-col gap-1 basis-full md:basis-9/12">
            <a href={item.link} className='text-black dark:text-neutral-300'>{item.displayLink}</a>
            <a href={item.link} className='text-blue-700 text-xl font-semibold'>{item.snippet}</a>
            <p className='text-black dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim error vel quasi labore dolorum aspernatur maxime sapiente facere nemo! Beatae cum obcaecati voluptatem quibusdam necessitatibus iusto laudantium incidunt non? Obcaecati architecto provident illo tenetur dolor ad eos, eaque dignissimos nostrum.</p>
          </div>
          <div className="basis-full md:basis-2/6">
            {item?.pagemap?.cse_thumbnail?.length > 0 && 
              <img src={item?.pagemap?.cse_thumbnail[0].src} alt='news images' className='rounded'/>
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsTab