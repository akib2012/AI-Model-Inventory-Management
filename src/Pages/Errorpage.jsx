import { Link } from "react-router"; 
const Errorpage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen relative bg-gradient-to-br from-[#000814] via-[#000814] to-[#001D6E]">
      <div className="text-center relative z-10">
        <h1 className="text-7xl font-extrabold mb-3 drop-shadow-lg text-white">404</h1>
        <p className="text-2xl font-semibold mb-6 text-gray-300">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <Link to="/">
          <button className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 transition-all text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-red-500/30">
            GO HOME
          </button>
        </Link>

        {/* Background Circles */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-700/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay"></div>
    </div>
  );
};

export default Errorpage;
