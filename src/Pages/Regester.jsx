import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Authcontext from "../ContextAuth/Authcontext";
import { toast } from "react-toastify";

const Regester = () => {
  const { usersingup, googlesingup, updateprofile, user, setUser } =
    useContext(Authcontext);
  const Navigate = useNavigate();
  const location = useLocation();

  console.log("testing for locaiton", location.state);

  const hadnleregester = (e) => {
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

    usersingup(email, password)
      .then((res) => {
        console.log(res.user);

        /* updat profile here add just disply name and the photo url: */
        updateprofile({
          displayName: name,
          photoURL: photo,
          email: email,
        }).then((res) => {
          const userinfo = {
            user_name: name,
            user_mail: email,
            user_photo: photo,
          };

          fetch(
            "https://ai-model-inventory-manager-server-ten.vercel.app/users",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userinfo),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log("after getting regester", data);
              if (data.insertedId) {
                Navigate(location?.state || "/");
                toast.success("regesterd succesfull !");
              }
            })
            .catch((error) => {
              console.log(error);
              toast.error("something went wrong!!");
            });

          const updateuser = {
            ...user,
            displayName: name,
            photoURL: photo,
          };

          setUser(updateuser);
        });
      })
      .catch((error) => console.log(error));
  };

  const googlesing = () => {
    googlesingup()
      .then((res) => {
        console.log(res.user);
        const newuser = {
          user_name: res.user.displayName,
          user_mail: res.user.email,
          user_photo: res.user.photoURL,
        };

        fetch(
          "https://ai-model-inventory-manager-server-ten.vercel.app/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newuser),
          }
        )
          .then((res) => res.json())
          .then((result) => {
            console.log("after google login", result);
            if (result.insertedId) {
              Navigate(location?.state || "/");
              toast.success("regesterd succesfull !");
            }
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="min-h-screen  flex justify-center items-center bg-gradient-to-br from-[#000814] via-[#000814] to-[#001D6E]  py-17">
        <div className="bg-[#1E293B]/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-[90%] sm:w-[400px] text-center border-2 border-amber-300 shadow-amber-50">
          <h1 className="text-2xl font-bold mb-6 text-[#6C63FF]">
            Register for AI Model Inventory Manager
          </h1>

          <form onSubmit={hadnleregester} className="space-y-4 text-left">
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
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                Photo URL
              </label>
              <input
                type="url"
                name="photo"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#6C63FF]/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
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

          <div className="my-5 text-gray-400 text-sm">or</div>

          <button
            onClick={googlesing}
            className="w-full flex items-center justify-center gap-2 bg-white text-[#0F172A] py-2 rounded-lg font-medium hover:bg-gray-200 transition-all"
          >
            <i className="fa-brands fa-google text-lg text-[#EA4335]"></i>
            Sign up with Google
          </button>

          <p className="mt-5 text-gray-400 text-sm">
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
    </div>
  );
};

export default Regester;
