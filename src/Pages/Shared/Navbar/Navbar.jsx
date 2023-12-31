import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Products</Link>
      </li>
      <li>
        <Link to="/">Contact Us</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content text-xl font-bold  mt-3 p-2 shadow bg-slate-100 rounded-box w-40">
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-3xl">GREENMIND</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold">{menuItems}</ul>
        </div>
        <div className="navbar-end p-3">
        <Link className="btn mr-3" to="/login">CART</Link>
        <Link className="btn mr-3" to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
