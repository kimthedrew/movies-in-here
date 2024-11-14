"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

   
    const accountExists = email === "user@example.com"; 
    const passwordCorrect = password === "password123"; 

    if (accountExists && passwordCorrect) {

      router.push("/"); 
    } else {
      setError(
        "Invalid credentials. If you don't have an account, please sign up."
      );
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-900 text-neutral-100">
      <div className="max-w-md w-full bg-neutral-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Log In</h2>
        {error && (
          <p className="text-red-500 text-center mb-4">
            {error}
            <br />
            <Link href="/Signup" className="text-blue-500 hover:underline">
              Sign up here
            </Link>
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-neutral-700 rounded-lg border border-neutral-600 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-neutral-700 rounded-lg border border-neutral-600 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Do not have an account?{""}
            <Link href="/Signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
