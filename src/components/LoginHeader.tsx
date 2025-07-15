import { Link } from 'react-router-dom'

const LoginHeader = () => {
  return (
    <header className="w-full bg-gradient-to-r bg-black p-4 flex justify-between">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to={"/dashboard"}
          className="text-2xl sm:text-3xl font-space-mono text-white mb-4 hover:text-cyan-500"
        >
          MyComponents
        </Link>
      </div>
    </header>
  );
};

export default LoginHeader;
