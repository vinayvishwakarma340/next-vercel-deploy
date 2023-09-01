import React from 'react'
import useRemoveSpaceNew from '../../CustomHook/useRemoveSpaceNew'

const JobTagCarousel = ({ data, generateRedirectionUrl, generateJobTagClouds }) => {

  return (
    <div className='w-full bg-purple-50 h-24 border border-purple-300 flex flex-col justify-center gap-3 rounded-md my-4 px-4 '>
      <div className='w-full overflow-x-auto flex items-center gap-4  manual-scroll-bar'>
        {
          data.map((item, index) => (
            <a key={index} href={generateRedirectionUrl(item.name, item.id)} className='shrink-0'>
              <div className='p-2 inline-block mb-4 bg-white shadow-md border border-gray-300 rounded-md text-xs text-gray-900'>
                <div className='font-bold'>{generateJobTagClouds(item.name)}</div>
                {/* <div>{item.count} Job Openings</div> */}
              </div>
            </a>
          ))
        }
      </div>
      {/* <div className='bg-zinc-300 w-full h-1'>

      </div> */}
    </div>
  )
}

export default JobTagCarousel