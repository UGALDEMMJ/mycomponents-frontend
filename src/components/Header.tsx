import React from 'react'

export const Header = () => {
  return (
    <header className='w-full bg-gradient-to-r bg-black p-4'>
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className='text-2xl sm:text-3xl font-space-mono text-white mb-4'>MyComponents</h1>
        </div>
    </header>
  )
}
