import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // Perform login logic here
    console.log('Email submitted:', email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-900 shadow-lg rounded-lg p-8 max-w-md w-full text-white">
        <h1 className="text-2xl font-bold text-center mb-6">Log in to Spotify</h1>

        {/* Social Login Options */}
        <div className="flex flex-col gap-3 mb-8">
          <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-600 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            <FaFacebookF className="mr-2" /> Continue with Facebook
          </button>
          <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-600 rounded-lg bg-gray-800 text-white hover:bg-gray-900">
            <FaApple className="mr-2" /> Continue with Apple
          </button>
          <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-600 rounded-lg bg-white text-gray-800 hover:bg-gray-100">
            <FaGoogle className="mr-2" /> Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="border-b flex-grow border-gray-600"></div>
          <span className="mx-4 text-gray-500 font-semibold">or</span>
          <div className="border-b flex-grow border-gray-600"></div>
        </div>

        {/* Email Login Form */}
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-300 font-semibold mb-2">Email Address</label>
          <input
            type="email"
            className="w-full px-4 py-2 mb-4 border border-gray-600 rounded-lg focus:outline-none focus:border-green-500 bg-gray-800 text-white placeholder-gray-400"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {error && <p className="text-red-500 mb-2">{error}</p>} {/* Display error message */}
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600">
            Log In with Email
          </button>
        </form>

        {/* Sign-Up Option */}
        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-green-500 hover:underline">
            Sign up for Spotify
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
