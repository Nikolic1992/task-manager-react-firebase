import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import TaskRocketLogo from "../assets/taskrocket_logo.png";

function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-screen bg-[url('./assets/landing_background.png')] bg-cover bg-center bg-no-repeat relative overflow-x-hidden">
      {/* Header */}
      <header className="container mx-auto flex justify-between items-center py-4 px-4 sm:py-6 sm:px-0 relative z-20">
        {/* Logo */}
        <Link
          to="/home"
          className="flex justify-center items-center gap-3 sm:gap-5"
        >
          <img
            src={TaskRocketLogo}
            alt="Rocket logo"
            className="w-[70px] sm:w-[100px]"
          />
          <h1 className="text-xl sm:text-2xl font-extrabold">TaskRocket</h1>
        </Link>

        {/* Desktop buttons */}
        <div className="hidden sm:flex gap-4 justify-center items-center">
          <Link to="/login" className="flex items-center">
            <button className="btn btn-soft btn-primary rounded-lg w-[100px] h-[50px] transition-all ease-in-out">
              Login
            </button>
          </Link>
          <Link to="/register" className="flex items-center">
            <button className="btn btn-outline btn-secondary rounded-lg w-[100px] h-[50px] transition-all ease-in-out">
              Register
            </button>
          </Link>
        </div>

        {/* Mobile menu icon */}
        <button
          className="sm:hidden flex items-center justify-center z-30"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`sm:hidden fixed top-0 right-0 w-full h-full bg-black/50 backdrop-blur-sm z-10 transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-16 right-4 flex flex-col gap-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-transform duration-300 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-10"
          }`}
        >
          <Link to="/login" className="w-[120px]">
            <button className="btn btn-soft btn-primary rounded-lg w-full h-[35px] text-sm transition-all ease-in-out">
              Login
            </button>
          </Link>
          <Link to="/register" className="w-[120px]">
            <button className="btn btn-outline btn-secondary rounded-lg w-full h-[35px] text-sm transition-all ease-in-out">
              Register
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center justify-center mt-16 sm:mt-28 gap-6 sm:gap-10 px-4 sm:px-0 text-center relative z-0">
        <h1 className="text-primary font-extrabold text-[32px] sm:text-[70px] leading-snug sm:leading-tight">
          Boost Your{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Productivity
          </span>
          ,<br /> Simplify Your Life
        </h1>

        <p className="text-base sm:text-xl text-primary font-semibold max-w-[300px] sm:max-w-[600px]">
          Take control of your daily tasks with smart tools designed to keep you
          organized, focused, and motivated every day.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-4 sm:mt-6 w-full sm:w-auto items-center sm:items-start">
          <Link to="/register" className="flex w-full sm:w-auto justify-center">
            <button className="btn btn-primary rounded-lg w-full sm:w-[150px] h-[50px] transition-all ease-in-out">
              Get Started
            </button>
          </Link>

          <Link to="/register" className="flex w-full sm:w-auto justify-center">
            <button className="btn btn-secondary btn-outline rounded-lg w-full sm:w-[200px] h-[50px] transition-all ease-in-out">
              Preview Platform
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Landing;
