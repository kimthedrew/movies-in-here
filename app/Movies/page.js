// app/movies/page.js
'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";



export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(1);
  

  useEffect(() =>{
    async function fetchMovies() {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=68e1a730a717815ae12bb720d90a2e38');
        const data = await response.json();
        setMovies(prevMovies => [...prevMovies, ...data.results]);

      
    }
    fetchMovies();
  }, [page]);


  const loadMoreMovies = () => {
    setPage(prevPage => prevPage + 1);
  };

  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div  style={{padding: '1rem'}}>
      <Navbar/>
      <h1>Movies</h1>
      <input
      type="text"
      placeholder="Filter movies..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      style={{ marginBottom: '1rem', padding: '0.5rem' }}
      />
      <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
        gap: '1rem'}}
        >
        {filteredMovies.map(movie => (
          <Link
          key={movie.id} 
          href={`/movies/${movie.id}`}
          passHref
          >
         <div style={{ border: '1px solid #ccc', padding: '1rem', textAlign: 'center'}} >
          
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
            style={{ width: '100%' }} 
           />
          </div>

          </Link>
        ))}
      </div>
      <button onClick={loadMoreMovies} style={{ marginTop: '1rem', padding: '0.5rem 1rem'}}>
        Load More
      </button>
    </div>
  );
}

  