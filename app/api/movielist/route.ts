import axios from "axios";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";



export async function POST(req:Request) {
    const {url} = await req.json();
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${url}`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_TOKEN}`
          }
      };
    
    try {
        const response = await axios.request(options);
        return NextResponse.json(response.data);
    }
    catch(e){
    }
}