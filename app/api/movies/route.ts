import axios from "axios";
import { NextResponse } from "next/server";


const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day?page=1',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWMxMGQ5OWU3Zjk5YmQxOWQ1OTliNmIyM2ZiZDlmMyIsInN1YiI6IjY0ZGNiNTNkNTllOGE5MDExYzhiNGYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NW_Vhm88cs_cVsm6FQQmWkf6BsQPE_K5PwQspII3OfA'
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