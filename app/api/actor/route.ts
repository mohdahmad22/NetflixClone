import axios from "axios";
import { NextResponse } from "next/server";


const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/genre/movie/list',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`
      }
  };

export async function GET() {
    try {
        const response = await axios.request(options);
        return NextResponse.json(response.data);
    }
    catch(e){
    }
}