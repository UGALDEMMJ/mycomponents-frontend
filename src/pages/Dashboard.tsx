import React from 'react'
import { Link } from 'react-router-dom'
const Dashboard: React.FC = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-3 md:grid-cols-2 md:grid-rows-3 gap-4 p-6 h-screen 
    bg-transparent
    '>

      {/*Primer card*/}
      <Link to={'/'}
      className='realtive col-span-1 row-span-1 md:col-span-1 md:row-span-2 p-6 border
      rounded-lg shadow-lg flex items-center justify-center group border-cyan-500'>
      </Link>

      {/*Segundo card*/}
      <Link to={'/'}
      className='realtive col-span-2 row-span-1 md:col-span-1 md:row-span-1 p-6 border
      rounded-lg shadow-lg flex items-center justify-center group border-cyan-500'>
      </Link>

      {/*Tercer card*/}
      <Link to={'/'}
      className='realtive col-span-2 row-span-2 md:col-span-1 md:row-span-1 p-6 border 
      rounded-lg shadow-lg flex items-center justify-center group border-cyan-500'>
      </Link>

      {/*Cuarto card*/}
      <Link to={'/'}
      className='realtive col-span-1 row-span-3  md:col-span-2 md:row-span-2 p-6 border
      rounded-lg shadow-lg flex items-center justify-center group border-cyan-500'>
      </Link>

    </div>
  )
}

export default Dashboard