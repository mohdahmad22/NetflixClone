import axios from "axios";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    const { query,page } = await req.json();
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWMxMGQ5OWU3Zjk5YmQxOWQ1OTliNmIyM2ZiZDlmMyIsInN1YiI6IjY0ZGNiNTNkNTllOGE5MDExYzhiNGYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NW_Vhm88cs_cVsm6FQQmWkf6BsQPE_K5PwQspII3OfA'
        }
    };

    try {
        const response = await axios.request(options);
        return NextResponse.json(response.data);
    }
    catch (e) {
    }
}