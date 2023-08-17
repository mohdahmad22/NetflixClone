"use client"
import React, { useEffect,useState } from 'react'
import { MovieCategory } from '@/components';
import PlayVideo from '@/components/PlayVideo';


const Home = () => {
    const [movieGenre,setMovieGenere]= useState([
        {name:"Trending"},{name:"Top Rated"},{name:"Now Playing"},{name:"Popular"},{name:"Upcoming"},
    ]);
    
const fetchMoviegenere=()=>{
    // axios.get("/api/actor")
    // .then((res)=>setMovieGenere(res.data.genres))
}

    useEffect(()=>{
        fetchMoviegenere();
    },[])


  return (
    <div>
        <PlayVideo />
        {movieGenre && movieGenre.map((gener)=>(
            <MovieCategory gener={gener} key={gener.name} />
        ))}
    </div>
  )
}

export default Home