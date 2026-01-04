import React, { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Authcontext from "../ContextAuth/Authcontext";
import { toast } from "react-toastify";

const Login = () => {
  const { usersignin, googlesingup, setUser } = useContext(Authcontext);
  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 Input refs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // 🔐 Email / Password login
  const handlelogin = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      toast.warning("Please enter email and password");
      return;
    }

    try {
      const res = await usersignin(email, password);
      const firebaseUser = res.user;

      // 🔑 Firebase token
      const token = await firebaseUser.getIdToken();
      localStorage.setItem("access-token", token);

      // ✅ FIX: Store user in Firebase standard shape
      setUser({
        displayName: firebaseUser.displayName || "",
        email: firebaseUser.email,
        photoURL: firebaseUser.photoURL || "",
      });

      toast.success("Successfully logged in!");
      navigate(location.state?.from || "/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid email or password");
    }
  };

  // 🔵 Google login
  const googlesing = async () => {
    try {
      const res = await googlesingup();
      const firebaseUser = res.user;

      const token = await firebaseUser.getIdToken();
      localStorage.setItem("access-token", token);

      // ✅ FIX: Same user shape
      setUser({
        displayName: firebaseUser.displayName || "",
        email: firebaseUser.email,
        photoURL: firebaseUser.photoURL || "",
      });

      toast.success("Successfully logged in!");
      navigate(location.state?.from || "/");
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Google login failed");
    }
  };

  // 🧪 Demo credentials autofill
  const fillDemoCredentials = () => {
    emailRef.current.value = "user@gmail.com";
    passwordRef.current.value = "@!Adskafj345489357#";
    toast.info("Demo credentials injected");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#000814] via-[#000814] to-[#001D6E]">
      <div className="bg-[#1E293B]/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl shadow-amber-50 w-[90%] sm:w-[400px] text-center border-2 border-amber-50">
        <h1 className="text-2xl font-bold mb-6 text-[#6C63FF]">
          Login to AI Model Inventory Manager
        </h1>

        {/* 🔐 Login Form */}
        <form onSubmit={handlelogin} className="space-y-4 text-left">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              ref={emailRef}
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#6C63FF]/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <input
              ref={passwordRef}
              type="password"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#6C63FF]/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          <div className="text-right">
            <Link
              to="#"
              className="text-sm text-[#00C9A7] hover:text-[#6C63FF]"
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

        {/* 🧪 Demo Button */}
        <button
          type="button"
          onClick={fillDemoCredentials}
          className="w-full mt-3 border border-[#00C9A7] text-[#00C9A7] py-2 rounded-lg font-medium hover:bg-[#00C9A7]/10 transition-all"
        >
          Use Demo Credentials
        </button>

        <div className="my-5 text-gray-400 text-sm">or</div>

        {/* 🔵 Google */}
        <button
          type="button"
          onClick={googlesing}
          className="w-full flex items-center justify-center gap-2 bg-white text-[#0F172A] py-2 rounded-lg font-medium hover:bg-gray-200 transition-all"
        >
          <i className="fa-brands fa-google text-lg text-[#EA4335]"></i>
          Sign in with Google
        </button>

        <p className="mt-5 text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            state={location?.state}
            className="text-[#00C9A7] hover:text-[#6C63FF]"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
