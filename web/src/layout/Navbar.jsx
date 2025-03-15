import { LogInIcon, ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 shadow-md">
      <div>
        <Link to="/" className="text-2xl font-bold tracking-tighter">
          <div className="flex space-x-2 items-center">
            <img src="./icons/mart.png" className="w-12 h-12" />
            <span>FlyMart</span>
          </div>
        </Link>
      </div>
      <div className="flex space-x-2">
        <Link
          to="/cart"
          className="flex items-center bg-blue-500 text-white px-4 py-1.5 rounded-md hover:cursor-pointer active:bg-gray-800 hover:shadow-lg text-sm"
        >
          <ShoppingCartIcon className="h-4 w-4 mr-2" />
          <span>Cart</span>
        </Link>
        <Link
          to="/login"
          className="flex items-center bg-blue-500 text-white px-4 py-1.5 rounded-full hover:cursor-pointer active:bg-gray-800 hover:shadow-lg text-sm"
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
