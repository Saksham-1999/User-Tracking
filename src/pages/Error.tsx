import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

interface ErrorPageProps {
  errorCode?: string;
  title?: string;
  message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode = "404",
  title = "Page Not Found",
  message = "Oops! The page you're looking for doesn't exist or has been moved.",
}) => {
  const location = useLocation();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <img
        src={logo}
        alt="Ekjal Logo"
        className="w-24 h-24 mb-8"
      />
      <h1 className="text-6xl font-bold text-gray-800 mb-4">{errorCode}</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">{title}</h2>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
        {message}
      </p>
      {location.pathname !== "/" && (
        <Link
          to="/"
          className="text-lg font-semibold bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Return to Home
        </Link>
      )}
    </div>
  );
};

export default ErrorPage;
