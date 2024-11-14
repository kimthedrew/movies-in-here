'use client'
import React, { useState, useEffect } from 'react';

// Fetch API URLs for movies and series
const API_KEY = "68e1a730a717815ae12bb720d90a2e38";
const SEARCH_MOVIES_URL = (query) => `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
const SEARCH_SERIES_URL = (query) => `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}`;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [type, setType] = useState('movies'); // default type is 'movies'

  // Fetch results based on search term and type (movies or series)
  useEffect(() => {
    if (searchTerm.trim() === '') return; // Don't fetch if the search term is empty

    setLoading(true);
    setError(null);
    
    const url = type === 'movies' ? SEARCH_MOVIES_URL(searchTerm) : SEARCH_SERIES_URL(searchTerm);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results);
        setLoading(false);
      })
      .catch(err => {
        setError("Error fetching search results");
        setLoading(false);
      });
  }, [searchTerm, type]);

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle type selection change (movies or series)
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="bg-neutral-900 rounded-lg p-4 mb-6">
      <h2 className="text-2xl font-bold text-neutral-100 mb-4">Search Movies or Series</h2>

      <div className="mb-4 flex justify-between items-center">
        {/* Search Input */}
        <input
          type="text"
          className="p-2 w-full sm:w-3/4 text-neutral-900"
          placeholder={`Search for ${type === 'movies' ? 'Movies' : 'TV Series'}`}
          value={searchTerm}
          onChange={handleSearchChange}
        />

        {/* Type Selection */}
        <select
          className="p-2 ml-4 bg-neutral-800 text-neutral-100 rounded"
          value={type}
          onChange={handleTypeChange}
        >
          <option value="movies">Movies</option>
          <option value="series">TV Series</option>
        </select>
      </div>

      {/* Display Loading or Error State */}
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {/* Display Search Results */}
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {searchResults.map((item) => (
            <div key={item.id} className="bg-neutral-800 rounded-lg overflow-hidden shadow-md">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
                className="w-full h-auto"
              />
              <div className="p-2 text-neutral-100">
                <h3 className="text-lg font-semibold">{item.title || item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        searchTerm && !loading && <div>No {type === 'movies' ? 'movies' : 'TV series'} found.</div>
      )}
    </div>
  );
};

export default Search;
