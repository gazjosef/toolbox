import React from "react";

const Form: React.FC = () => {
  return (
    <form className="max-w-md mx-auto border-2 p-4 rounded">
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-gray-600 text-sm font-semibold"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder=" "
          className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-0"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-600 text-sm font-semibold"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder=" "
          className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-0"
        />
      </div>
      <div className="mb-6">
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default Form;
