"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MovieCard } from '.';

interface MovieCategoryProps {
    gener:{name:string}
}

const MovieCategory = ({gener}:MovieCategoryProps) => {
    const [movies,setMovies] = useState([]);

    const fetchMovies=(url:string,body:Object)=>{
        axios.post(`/api/${url}`,body)
        .then((res)=>{
            setMovies(res.data.results)
        })
    }
    useEffect(()=>{
        if(gener.name === "Trending") fetchMovies("movies",{})
        else if (gener.name === "Top Rated") fetchMovies("movielist",{url:"top_rated"})
        else if (gener.name === "Upcoming") fetchMovies("movielist",{url:"upcoming"})
        else if (gener.name === "Now Playing") fetchMovies("movielist",{url:"now_playing"})
        else if (gener.name === "Popular") fetchMovies("movielist",{url:"popular"})
    },[])
  return (
    <div className='flex flex-col ml-10  relative'>
        <p className='text-white font-bold text-[32px]'>{gener.name}</p>
        <div className='flex flex-row gap-5 overflow-x-auto no-scrollbar'>
        {
            movies && movies.map((movie:any)=>(
                <MovieCard movie={movie} key={movie.id} width={200} />
            ))
        }
        </div>
    </div>
  )
}

export default MovieCategory