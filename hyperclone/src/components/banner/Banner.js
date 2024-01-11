import React from 'react'

function Banner() {
  return (
    <div className="partnerships ">
        <div className="partnerships__wrapper flex">
        <h4 className="cen_banner">Intelligent Document Processing: The Fast Lane to an AI-powered Enterprise.</h4>
        <button className="rounded-full bg-white border-2 border-black text-black px-6 py-3 transition duration-300 ease-in-out hover:bg-black hover:text-white">
        Learn More
      </button>
     
     </div>
        <img loading="lazy" width="100%" height="100" src="https://www.hyperscience.com/wp-content/uploads/2023/06/process-home23.svg" className="walkthough" />
        <div className="partnerships__wrapper2 flex">
        <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="text-center">
           
           
            <h3 className="mx-auto font-sans text-4xl font-medium leading-relaxed text-gray-700 lg:w-2/3 dark:text-gray-300">
            We partner with leading technology providers to automate your end-to-end business processes with ease
            </h3>
          </div>
        </div>
      </div>
        <button className="rounded-full bg-white border-2 border-black text-black px-6 py-3 transition duration-300 ease-in-out hover:bg-black hover:text-white">
       Explore partnerships
      </button>
      </div>
    </div>
  )
}

export default Banner                                                     