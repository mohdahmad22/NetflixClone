"use client"

import { MovieCard } from '@/components';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface MovieCategoryProps {
    category: string
}

const MovieSearch = ({ category }: MovieCategoryProps) => {
    const [movies, setMovies] = useState([]);
    const [counter, setCounter] = useState(1);

    const fetchMovies = (url: string, body: Object) => {
        axios.post(`/api/${url}`, body)
            .then((res) => {
                setMovies(res.data.results)
            })
    }
    useEffect(() => {
        fetchMovies("searchmovie", { query: category, page: counter })
    }, [counter])
    return (
        <div className='flex flex-col ml-10 mt-24'>
            <p className='text-white font-bold text-[32px]'>{category}</p>

            <div className='flex flex-row flex-wrap gap-5 overflow-x-auto no-scrollbar'>
                {
                    movies && movies.map((movie:any) => (
                        movie?.poster_path && <MovieCard movie={movie} key={movie.id} width={200} />
                    ))
                }
                <button onClick={() => {
                    const next = counter + 1;
                    setCounter(next)
                }} className='text-white'>Next</button>
            </div>
        </div>
    )
}

export default MovieSearch