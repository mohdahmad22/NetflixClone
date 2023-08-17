"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { MovieDialog } from '.'

interface MovieCardProps {
    movie:any,
    width:number
}

const MovieCard = ({ movie,width }:MovieCardProps) => {
    const [openModal,setModal]= useState(false);

    const handleOpen=()=>{
        setModal(true)
    }

    return (
        <>
        <div onClick={handleOpen} key={movie?.id}>
            <Image alt='imag'  className='rounded-md cursor-pointer' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={width} height={300} />
            <h1 className='text-white w-[210px]'>{movie?.title}</h1>
        </div>
        {openModal && <MovieDialog movie={movie} setModal={setModal}  />}
        </>
    )
}

export default MovieCard