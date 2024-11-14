'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            async function fetchMovieDetails() {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=68e1a730a717815ae12bb720d90a2e38`);
                const data = await response.json();
                setMovie(data);
                
            }
            fetchMovieDetails();
        }
    }, [id]);
    if (!movie) return <p>loading...</p>;

    return (
        <div style={{ padding: '1rem' }}>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{ width: '100%' }} />
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
}