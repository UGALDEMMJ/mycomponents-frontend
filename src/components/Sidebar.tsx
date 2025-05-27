import React from 'react'

export const Sidebar = () => {
  return (
    <div className='p-3 text-white font-space-mono'>
      <h2 className='text-white text-2xl'>
        Categories
      </h2>
      <nav className='flex flex-col gap-2'>

      </nav>
      <div className='mt-auto pt-4 border-t border-zinc-700'>
        <a className='flex items-center gap-3 p-2 w-full rounded-md hover:bg-zinc-800 transition-colors text-red-400' href=''>Admin</a>
      </div>
    </div>
  )
}
