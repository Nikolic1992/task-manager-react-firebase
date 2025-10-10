import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../auth/firebase";
import TaskRocketLogo from "../assets/taskrocket_logo.png";
import ThemeSelector from "./ThemeSelector";
import { LogOut } from "lucide-react";

function NavBar() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

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

        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-primary rounded-lg w-[100px] h-[50px] flex items-center justify-center gap-2 hover:btn-error"
          >
            <LogOut />
            Logout
          </button>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
