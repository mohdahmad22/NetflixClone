import axios from "axios";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    const { query,page } = await req.json();
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_TOKEN}`
        }
    };

    try {
        const response = await axios.request(options);
        return NextResponse.json(response.data);
    }
    catch (e) {
    }
}