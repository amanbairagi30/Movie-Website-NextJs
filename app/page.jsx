// "use client"
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import Movie from './Movie'
import "../app/[movie]/style.css"
// import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=348a9bc33656ea24c342304d2ac140f7`)
  const res = await data.json()
  // console.log(res)


  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between py-10 px-0">
        <h1 className='text-4xl p-4 my-4 card w-full text-center'>Flixify</h1>
        <div className='grid gap-2 grid-cols-fluid'>



          {res.results.map((movie) => (

            <div className='px-4'>
              {/* <h1>{movie.vote_count}</h1> */}
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}

              />
            </div>
          ))}
        </div>
      </main>
      <footer className='text-center m-4 border card p-4'>
            Created with 💖 by Aman Kumar Bairagi
      </footer>

    </>
  )
}
