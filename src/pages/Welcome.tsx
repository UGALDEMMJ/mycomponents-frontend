import React from 'react'

const Welcome = () => {
  return (
    <>
      <div className='bg-night h-screen text-berkeley justify-center items-center flex'>
        <div className='group bg-platinum rounded-2xl p-5 size-fit flex flex-col w-1/2 shadow-platinum  border
         border-night shadow-xl inset-shadow-2xs 
         transition delay-150 duration-1000 ease-in-out hover:bg-platinum hover:text-ppl hover:shadow-ppl
          skew-3  hover:border-ppl
         '>
          <p className='font-semibold text-left break-words'>
            Welcome to <spam className='text-berkeley hover:underline hover:text-night'>MyComponents</spam>, your centralized repository for reusable components. Here, you can store, organize, and access a wide range of UI elements—whether they’re built with Bootstrap, Tailwind, React, or any other framework. MyComponents is designed to streamline your workflow, making it easy to reuse and customize components while maintaining consistency and efficiency across your projects. Explore, create, and transform the way you develop your applications!
          </p>
          <div className='flex justify-center'>
          <button className='text-berkeley shadow-2xl shadow-berkeley bg-platinum w-40 
        items-center p-2 rounded-2xl m-2 transition border-night border
        hover:bg-ppl hover:text-platinum  hover:border-ppl
        group-hover:shadow-ppl'>
            Go to Dashboard</button>
          </div>
        </div>
      </div>
    </>
  )

}

export default Welcome