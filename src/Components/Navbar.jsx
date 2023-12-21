import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then()
    .catch()
  }

  const navlinks = (
    <>
      <li className="text-lg font-normal">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg font-normal">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li className="text-lg font-normal">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="text-lg font-normal">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 border shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <img className="w-32" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end gap-2">
            <p className="hidden md:block md:text-lg">{user?.displayName}</p>
            <img className="h-[55px] rounded-full" src={user?.photoURL} alt="" />
          {
            user ? 
            <Link to="/login">
              <a className="btn" onClick={handleSignOut}>LogOut</a>
            </Link>
            :
            <Link to="/login"><a className="btn">Login</a></Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
