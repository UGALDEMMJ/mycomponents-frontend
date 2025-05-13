import React from 'react'

type HeadeProps ={
  onToggleSidebar: () => void;
}

export const Header:React.FC<HeadeProps> = ({onToggleSidebar}) => {
  return (
    <header className='w-full bg-gradient-to-r bg-black p-4 flex justify-between'>
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className='text-2xl sm:text-3xl font-space-mono text-white mb-4'>MyComponents</h1>
        </div>
         <div className='container mx-auto flex justify-end'>
            <button onClick={onToggleSidebar} className='text-2xl sm:text-3xl font-space-mono text-white mb-4'>=</button>
        </div>
    </header>
  )
}
