import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SignUp() {
  return (
    <div>
      <Header />
      <main className="w-full bg-black min-h-screen flex flex-col items-center justify-center">
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-4xl font-bold text-center mb-6">Sign Up</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 mt-1 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 mt-1 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600" required />
            </div>
            <div>
              <label htmlFor="password" className="block text-lg font-medium">Password</label>
              <input type="password" id="password" className="w-full px-3 py-2 mt-1 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600" required />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-lg font-medium">Confirm Password</label>
              <input type="password" id="confirm-password" className="w-full px-3 py-2 mt-1 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600" required />
            </div>
            <button type="submit" className="w-full bg-[#F2613F] hover:bg-orange-600 text-white font-semibold py-2 rounded-md">Sign Up</button>
          </form>
          <p className="text-center mt-4">
            Already have an account? <Link to="/login" className="text-orange-500 hover:underline">Log In</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SignUp;
