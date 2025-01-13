import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function UnderConstruction() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <img src={logo} alt="Ekjal Logo" className="w-24 h-24 mb-8" />
      <h1 className="text-6xl font-bold text-yellow-500 mb-4">
        Under Construction 🚧
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        We're working hard to get this page ready!
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Please check back later or explore other parts of the site in the
        meantime.
      </p>
      <Link
        to="/"
        className="text-lg font-semibold bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default UnderConstruction;
