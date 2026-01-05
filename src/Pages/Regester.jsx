import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Authcontext from "../ContextAuth/Authcontext";
import { toast } from "react-toastify";

const Register = () => {
  const { usersingup, googlesingup, updateprofile, setUser } =
    useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();

  // Email/Password Registration
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters, include upper, lower, number & special character!"
      );
      return;
    }

    try {
      // 1️⃣ Firebase signup
      const result = await usersingup(email, password);
      const user = result.user;

      // 2️⃣ Update Firebase profile
      await updateprofile({ displayName: name, photoURL: photo });

      // 3️⃣ Get Firebase token & save for backend JWT auth
      const token = await user.getIdToken();
      localStorage.setItem("access-token", token);

      // 4️⃣ Send user info to backend
      const userInfo = {
        user_name: name,
        user_mail: email,
        user_photo: photo,
        role: "user",
        createdat: new Date(),
      };

      const res = await fetch(
        "https://ai-model-inventory-manager-server-dusky.vercel.app/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInfo),
        }
      );
      const data = await res.json();

      if (data._id || data.insertedId) {
        setUser(data);
        navigate(location.state?.from || "/");
        toast.success("Registered successfully!");
      } else if (data.message === "user exists") {
        toast.error("User already exists!");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Registration failed!");
    }
  };

  // Google Signup
  const handleGoogleSignup = async () => {
    try {
      const res = await googlesingup();
      const user = res.user;

      // 1️⃣ Get Firebase token & save
      const token = await user.getIdToken();
      localStorage.setItem("access-token", token);

      // 2️⃣ Prepare backend user data
      const newUser = {
        user_name: user.displayName,
        user_mail: user.email,
        user_photo: user.photoURL,
        role: "user",
        createdat: new Date(),
      };

      const response = await fetch(
        "https://ai-model-inventory-manager-server-dusky.vercel.app/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        }
      );
      const data = await response.json();

      if (data._id || data.insertedId) {
        setUser(data);
        navigate(location.state?.from || "/");
        toast.success("Registered successfully!");
      } else if (data.message === "user exists") {
        toast.error("User already exists!");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Google signup failed!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#000814] via-[#000814] to-[#001D6E] py-17">
      <div className="bg-[#1E293B]/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-[90%] sm:w-[400px] text-center border-2 border-amber-300 shadow-amber-50">
        <h1 className="text-2xl font-bold mb-6 text-[#6C63FF]">
          Register for AI Model Inventory Manager
        </h1>

        <form onSubmit={handleRegister} className="space-y-4 text-left">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Name</label>
            <input
              type="text"
              required
              name="name"
              className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#6C63FF]/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              required
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#6C63FF]/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          {/* Photo */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">
              Photo URL
            </label>
            <input
              type="url"
              required
              name="photo"
              className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#6C63FF]/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <input
              type="password"
              required
              name="password"
              className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#6C63FF]/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#00C9A7] text-[#0F172A] py-2 rounded-lg font-semibold hover:shadow-[0_0_15px_rgba(0,201,167,0.5)] transition-all"
          >
            Register
          </button>
        </form>

        <div className="my-5 text-gray-400 text-sm text-center">or</div>

        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-2 bg-white text-[#0F172A] py-2 rounded-lg font-medium hover:bg-gray-200 transition-all"
        >
          <i className="fa-brands fa-google text-lg text-[#EA4335]"></i>
          Sign up with Google
        </button>

        <p className="mt-5 text-gray-400 text-sm text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#00C9A7] hover:text-[#6C63FF] transition-all"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
