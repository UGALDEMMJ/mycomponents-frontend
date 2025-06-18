import {Link} from "react-router-dom";
import useAuth from "../hooks/useAuth"; 

export const SidebarAdmin = () => {
  const {logOut} = useAuth()
  return (
    <div className='p-3 text-white font-space-mono'>
      <h2 className='text-white text-2xl'>
        Categories
      </h2>
      <nav className='flex flex-col gap-2'>
        {/* Aqui se cargan las categorias */}
      </nav>
      <div className='mt-auto pt-4 border-t border-zinc-700'>
        <Link to={"/dashboard"} className='flex items-center gap-3 p-2 w-full rounded-md hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors text-white '>Dashboard</Link>
      </div>
      <div className='mt-auto pt-4  border-zinc-700'>
        <button 
        type="button"
        onClick={logOut}
        className='flex items-center gap-3 p-2 w-full rounded-md hover:bg-gradient-to-br hover:from-black hover:to-red-400 transition-colors text-white'>
          LogOut</button>
      </div>
    </div>
  )
}
