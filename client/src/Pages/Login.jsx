import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {
  const [currState, setCurrentState] = useState("Sign Up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDataSubmitted(true);
    // handle form submission
  };

  return (
    <div className="flex min-h-screen bg-cover bg-center items-center justify-center gap-2 sm:justify-evenly flex-wrap bg-gray-100 p-4">
      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="border-2 bg-white/90 text-black border-gray-500 flex flex-col gap-6 rounded-lg shadow-lg p-6 w-[min(90vw,400px)]"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currState}
          {currState === "Sign Up" && isDataSubmitted && (
            <FaArrowLeft
              onClick={() => setIsDataSubmitted(false)}
              className="w-5 h-5 cursor-pointer"
            />
          )}
        </h2>

        {currState === "Sign Up" && !isDataSubmitted && (
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="p-2 border border-gray-500 rounded-md focus:outline-none"
            placeholder="Full Name"
            required
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </>
        )}

        {currState === "Sign Up" && isDataSubmitted && (
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows="4"
            placeholder="Provide a short bio..."
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        )}

        <button
          type="submit"
          className="py-3 bg-black text-white rounded-md cursor-pointer hover:bg-gray-800"
        >
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-gray-700">
          {currState === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                className="font-medium text-black underline"
                onClick={() => {
                  setCurrentState("Login");
                  setIsDataSubmitted(false);
                }}
              >
                Login
              </button>
            </p>
          ) : (
            <p>
              Don’t have an account?{" "}
              <button
                type="button"
                className="font-medium text-black underline"
                onClick={() => {
                  setCurrentState("Sign Up");
                  setIsDataSubmitted(false);
                }}
              >
                Sign Up
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
