import axios from "axios";
import { NextResponse } from "next/server";


const TMDB_API="a9c10d99e7f99bd19d599b6b23fbd9f3"
const TMDB_AccessToken="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWMxMGQ5OWU3Zjk5YmQxOWQ1OTliNmIyM2ZiZDlmMyIsInN1YiI6IjY0ZGNiNTNkNTllOGE5MDExYzhiNGYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NW_Vhm88cs_cVsm6FQQmWkf6BsQPE_K5PwQspII3OfA"


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