'use client'
import React, { useEffect, useState } from "react";

const API_KEY = "68e1a730a717815ae12bb720d90a2e38";
const TRENDING_SERIES_URL = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`;

const TrendingSeries = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch(TRENDING_SERIES_URL)
      .then((response) => response.json())
      .then((data) => setSeries(data.results))
      .catch((error) => console.error("Error fetching series:", error));
  }, []);

  return (
    <div className="bg-neutral-900 rounded-lg p-4 mb-6">
      <h2 className="text-2xl font-bold text-neutral-100 mb-4">
        Trending Series
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {series.map((item) => (
          <div
            key={item.id}
            className="bg-neutral-800 rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.name}
              className="w-full h-auto"
            />
            <div className="p-2 text-neutral-100">
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSeries;
