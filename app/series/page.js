"use client"
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

const API_KEY = "68e1a730a717815ae12bb720d90a2e38";
const API_URL = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US`;

const SeriesPage = () => {
  const [series, setSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);


  const fetchSeries = async (page = 1) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}&page=${page}`);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setSeries((prevSeries) => [...prevSeries, ...data.results]);
        setHasMore(data.page < data.total_pages); 
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSeries(currentPage); 
  }, [currentPage]);


  const filteredSeries = series.filter((serie) =>
    serie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (serie) => {
    setSelectedSeries(serie);
  };

  const handleCloseModal = () => {
    setSelectedSeries(null);
  };

  const handleLoadMore = () => {
    if (hasMore && !isLoading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-center mb-8">
          <input
            type="text"
            className="w-1/2 p-3 border border-gray-300 rounded-lg"
            placeholder="Search Series..."
            value={searchTerm}
            onChange={handleSearchChange} 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSeries.length > 0 ? (
            filteredSeries.map((serie) => (
              <div
                key={serie.id}
                className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden group relative hover:scale-105 transform transition-all"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                  alt={serie.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {serie.name}
                  </h3>
                  
                  <button
                    onClick={() => handleViewDetails(serie)}
                    className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center col-span-4">
              No series found.
            </p>
          )}
        </div>


        {hasMore && !isLoading && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
            >
              Load More
            </button>
          </div>
        )}
        {isLoading && (
          <div className="flex justify-center mt-6 text-white">Loading...</div>
        )}
      </div>


      {selectedSeries && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-neutral-800 p-6 rounded-lg max-w-3xl w-full">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white font-bold text-xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-white">
              {selectedSeries.name}
            </h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedSeries.poster_path}`}
              alt={selectedSeries.name}
              className="mt-4 w-full h-96 object-cover"
            />
            <p className="text-lg text-gray-300 mt-4">
              {selectedSeries.overview}
            </p>
            <div className="mt-6">
              <p className="text-sm text-white">
                First Air Date: {selectedSeries.first_air_date}
              </p>
              <p className="text-sm text-white">
                Popularity: {selectedSeries.popularity}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SeriesPage;
