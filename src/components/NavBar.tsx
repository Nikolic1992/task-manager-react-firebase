import { Link } from "react-router";
import TaskRocketLogo from "../assets/taskrocket_logo.png";
import ThemeSelector from "./ThemeSelector";

function NavBar() {
  return (
    <div className="container flex justify-between items-center mx-auto py-4">
      {/* Logo */}
      <Link to="/home" className="flex justify-center items-center gap-5">
        <img src={TaskRocketLogo} alt="Rocket logo" className="w-[100px]" />
        <h1 className="text-2xl font-extrabold">TaskRocket</h1>
      </Link>

      {/* Auth buttons */}
      <div className="flex mr-10 gap-4 justify-center items-center">
        <ThemeSelector />
        <Link to="/login" className="flex items-center">
          <button className="btn btn-soft btn-primary rounded-lg w-[100px] h-[50px]">
            Login
          </button>
        </Link>
        <Link to="/register" className="flex items-center">
          <button className="btn btn-outline btn-secondary rounded-lg w-[100px] h-[50px]">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
