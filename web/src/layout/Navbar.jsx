import { LogInIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 shadow-md">
      <div>
        <Link to="/" className="text-2xl font-bold tracking-tighter">
          FlyMart
        </Link>
      </div>
      <div className="flex space-x-2">
        <Link
          to="/login"
          className="flex items-center bg-black text-white px-4 py-1.5 rounded-full hover:cursor-pointer active:bg-gray-800 hover:shadow-lg text-sm"
        >
          <LogInIcon className="h-4 w-4 mr-2" />
          <span>Login</span>
        </Link>
        <Link
          to="register"
          className="border-1 px-4 py-1.5 rounded-full hover:cursor-pointer hover:shadow-lg text-sm"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
