import {Link} from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className='p-3 text-white font-space-mono'>
      <h2 className='text-white text-2xl'>
        Public
      </h2>
      <nav className='flex flex-col gap-2'>
        {/* Aqui se cargan las categorias */}
      </nav>
      <div className='mt-auto pt-4 border-t border-zinc-700'>
        <Link to={"/login"} className='flex items-center gap-3 p-2 w-full rounded-md hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors text-white'>Admin
        </Link>
      </div>
    </div>
  )
}
