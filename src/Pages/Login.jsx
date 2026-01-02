import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Authcontext from "../ContextAuth/Authcontext";
import { toast } from "react-toastify";

const Login = () => {
  const { usersignin, googlesingup, user } = useContext(Authcontext);
  const location = useLocation()
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    usersignin(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state || "/");
        toast.success("Successfully login!");
      })
      .catch((error) => {
        console.log(error);
         toast.error("Something went wrong");
      });
  };

  const googlesing = () => {
    googlesingup()
      .then((res) => {
        console.log(res.user)
        navigate(location?.state || "/")
         toast.success("Successfully login!");
      })
      .catch((error) => {
        console.log(error)
        toast.error("Something went wrong");
      });
  };

  return (
    <div className=" min-h-screen flex justify-center items-center bg-gradient-to-br from-[#000814] via-[#000814] to-[#001D6E]">
      <div className="bg-[#1E293B]/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl shadow-amber-50 w-[90%] sm:w-[400px] text-center border-2 border-amber-50">
        <h1 className="text-2xl font-bold mb-6 text-[#6C63FF]">
          Login to AI Model Inventory Manager
        </h1>

        <form onSubmit={handlelogin} className="space-y-4 text-left">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#6C63FF]/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#6C63FF]/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          <div className="text-right">
            <Link
              to="#"
              className="text-sm text-[#00C9A7] hover:text-[#6C63FF] transition-all"
            >
              Forget Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#00C9A7] text-[#0F172A] py-2 rounded-lg font-semibold hover:shadow-[0_0_15px_rgba(0,201,167,0.5)] transition-all"
          >
            Login
          </button>
        </form>

        <div className="my-5 text-gray-400 text-sm">or</div>

        <button
          onClick={googlesing}
          className="w-full flex items-center justify-center gap-2 bg-white text-[#0F172A] py-2 rounded-lg font-medium hover:bg-gray-200 transition-all"
        >
          <i className="fa-brands fa-google text-lg text-[#EA4335]"></i>
          Sign in with Google
        </button>

        <p className="mt-5 text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link
           state={location?.state}
           
            to="/register"
            className="text-[#00C9A7] hover:text-[#6C63FF] transition-all"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
