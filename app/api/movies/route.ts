import axios from "axios";
import { NextResponse } from "next/server";


const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day?page=1',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`
      }
  };

export async function POST(req:Request) {
    try {
        const response = await axios.request(options);
        return NextResponse.json(response.data);
    }
    catch(e){
    }
}