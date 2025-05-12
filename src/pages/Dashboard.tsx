import React from 'react'
import { Link } from 'react-router-dom'
const Dashboard: React.FC = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-3 md:grid-cols-2 md:grid-rows-3 gap-4 p-6 h-screen 
    bg-gradient-to-b from-black via-blue-950 to-black
    '>

      {/*Primer card*/}
      <Link to={'/'}
      className='realtive col-span-1 row-span-1 md:col-span-1 md:row-span-2 p-6 bg-blue-500 
      rounded-lg shadow-lg flex items-center justify-center group'>
      </Link>

      {/*Segundo card*/}
      <Link to={'/'}
      className='realtive col-span-2 row-span-1 md:col-span-1 md:row-span-1 p-6 bg-blue-500 
      rounded-lg shadow-lg flex items-center justify-center group'>
      </Link>

      {/*Tercer card*/}
      <Link to={'/'}
      className='realtive col-span-2 row-span-2 md:col-span-1 md:row-span-1 p-6 bg-blue-500 
      rounded-lg shadow-lg flex items-center justify-center group'>
      </Link>

      {/*Cuarto card*/}
      <Link to={'/'}
      className='realtive col-span-1 row-span-3  md:col-span-2 md:row-span-2 p-6 bg-blue-500 
      rounded-lg shadow-lg flex items-center justify-center group'>
      </Link>

    </div>
  )
}

export default Dashboard