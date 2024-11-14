"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import TrendingMovies from "@/components/TrendingMovies";
import TrendingSeries from "@/components/TrendingSeries";
import Search from "@/components/Search";

const HomePage = () => {
  return (
    <div className="p-4 space-y-6">
      <Navbar />
      <TrendingMovies />
      <TrendingSeries />
      <Search />
    </div>
  );
};

export default HomePage;
