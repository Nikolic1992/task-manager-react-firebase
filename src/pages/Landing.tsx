import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import TaskRocketLogo from "../assets/taskrocket_logo.png";
import HeroImage from "../assets/hero.png";

function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a0a12] via-[#0b0b1c] to-[#0a0a12] text-white overflow-hidden">
      {/* Floating glow layers */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-pink-500/20 to-indigo-500/20 blur-[180px] rounded-full"></div>

      {/* Header */}
      <header className="container mx-auto flex justify-between   items-center py-6 px-4 sm:px-0 relative z-30">
        <Link to="/home" className="flex items-center gap-4">
          <img
            src={TaskRocketLogo}
            alt="Logo"
            className="w-[80px] cursor-pointer"
          />
          <h1 className="text-2xl font-extrabold tracking-tight cursor-pointer">
            TaskRocket
          </h1>
        </Link>

        <div className="hidden sm:flex gap-4 items-center">
          <Link to="/login">
            <button className="rounded-xl border cursor-pointer border-white/20 hover:border-white/40 px-6 py-2 backdrop-blur-sm transition-all">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="rounded-xl cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 font-semibold hover:opacity-90 transition-all">
              Register
            </button>
          </Link>
        </div>

        <button
          className="sm:hidden flex items-center justify-center z-40"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[80vh] container mx-auto px-4 sm:px-0 text-center z-20">
        {/* Hero background image */}
        <motion.img
          src={HeroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-contain opacity-[0.15] sm:opacity-[0.25] pointer-events-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glass Card */}
        <motion.div
          className="relative backdrop-blur-xs bg-white/5 border border-white/10 rounded-[32px] p-8 sm:p-16 shadow-[0_8px_60px_rgba(0,0,0,0.25)] max-w-[900px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="font-extrabold text-[40px] sm:text-[76px] leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Boost Your{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Productivity
            </span>
            <br /> Simplify Your Life
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-white/80 max-w-[600px] mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Take control of your daily tasks with smart tools designed to keep
            you organized, focused, and motivated every day.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/register">
              <button className="rounded-xl cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 w-[160px] h-[50px] font-semibold hover:opacity-90 transition-all">
                Get Started
              </button>
            </Link>

            <Link to="/register">
              <button className="rounded-xl cursor-pointer border border-white/20 w-[180px] h-[50px] hover:border-white/40 backdrop-blur-sm transition-all">
                Preview Platform
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Landing;
