import React from 'react'
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
const Card = (props: any) => {
  const { children, id } = props
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {children}
      <a href="#">
        <div className="shadow-blackA7 w-[250px] overflow-hidden rounded-md shadow-[0_2px_10px]">
          <AspectRatio.Root ratio={20 / 10}>
            <img
              className="h-full w-full object-cover"
              src="https://th.bing.com/th/id/OIP.a-uRswGdYwSrnSSVCXgeUQHaE7?pid=ImgDet&w=1921&h=1279&rs=1"
              alt="Landscape photograph by Tobias Tullius"
            />
          </AspectRatio.Root>
        </div>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the Rooms .</p>
      <a href={`/room-details/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        See Details
        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a>
    </div>
  )
}

export default Card