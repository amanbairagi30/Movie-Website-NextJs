import React from 'react'
import Image from 'next/image'
import "./style.css"

// export async function generateStaticParams(){
//     const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=348a9bc33656ea24c342304d2ac140f7`)
//     const res = await data.json()
//     return res.results.map((movie)=>({
//         movie: toString(movie.id),
//     }))
// }

const MovieDetails = async ({ params }) => {
    const { movie } = params
    const imagePath = "https://image.tmdb.org/t/p/original"
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}popular?api_key=348a9bc33656ea24c342304d2ac140f7`)
    const res = await data.json()
    return (
        <div className='flex flex-col m-[2rem]'>

            <div className='m-auto relative my-[2rem] flex items-center justify-center '>
                {/* {res.title} */}
                <nav className='absolute card w-fit left-8 p-4 my-2 flex gap-4 flex-col '>
                    <h1 className='text-2xl '>{res.title}</h1>
                    <span>Runtime : {res.runtime} minutes</span>
                    <button className='w-auto bg-green-500 h-[2.5rem] hover:transition-all hover:ease-in-out hover:bg-green-400 hover:scale-105  rounded-lg'>Watch Now</button>
                    <button className='w-auto bg-[#d1d1d1]  h-[2.5rem] hover:transition-all hover:ease-in-out card hover:scale-105  rounded-lg'>Add to playlist</button>
                </nav>

                <Image
                    className='aspect-video'
                    src={imagePath + res.backdrop_path}
                    width={1000}
                    height={1000}
                />
            </div>
            <aside>
                <h1>Overview</h1>
                <p>{res.overview}</p>
            </aside>
        </div>
    )
}

export default MovieDetails
