import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Rocket } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <title>Register</title>

      <form
        onSubmit={handleRegister}
        className="flex flex-col lg:flex-row w-full max-w-5xl bg-base-100 rounded-2xl shadow-lg overflow-hidden border border-primary/20  md:min-h-[650px]"
      >
        {/* LEFT SIDE - FORM SECTION */}
        <div className="w-full lg:w-[45%] p-6 sm:p-10 flex flex-col justify-center gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <Rocket className="size-10 text-primary" />
              <span className="text-2xl font-extrabold text-primary">
                TaskRocket
              </span>
            </div>

            <p className="text-sm mt-2 text-base-content/70 max-w-xs mx-auto leading-relaxed">
              Ready to launch your journey? Create your account and join the
              mission to productivity.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium" htmlFor="fullname">
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full rounded-md focus:ring-2 focus:ring-primary"
            />

            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-md focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="input input-bordered w-full rounded-md focus:ring-2 focus:ring-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}

          <div className="flex items-center justify-end mt-2">
            <button
              type="submit"
              className="btn btn-primary w-full md:w-1/2 font-bold hover:bg-secondary transition-all ease-in-out"
            >
              REGISTER
            </button>
          </div>

          <p className="text-sm text-center mt-2">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-semibold hover:underline hover:text-secondary transition-all ease-in-out"
            >
              Log in
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="hidden lg:flex w-full lg:w-[55%] relative items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 p-10 overflow-hidden">
          <img
            src="./signup.png"
            alt="Background illustration"
            className="w-[80%] h-auto object-contain opacity-80 z-0 mx-auto my-auto"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 gap-100">
            <h2 className="text-3xl font-extrabold text-primary tracking-tight mb-4">
              Ready for Takeoff ?
            </h2>
            <p className="text-base text-base-content/80 font-semibold leading-relaxed max-w-md">
              Every mission starts with one step. Join TaskRocket and launch
              your ideas to new heights of organization and success.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
