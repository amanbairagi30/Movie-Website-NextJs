import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import "./glass.css"

const Movie = ({ title, id, poster_path, release_date }) => {
    const imagePath = "https://image.tmdb.org/t/p/original"

    return (
        <div className=' z-20 my-10 glass border hover: transition-all hover:scale-125 rounded-lg p-4 flex flex-col items-center justify-evenly gap-4 flex-wrap'>
            <h1 className='text-center text-sm'>{title}</h1>
            <h1 className='text-center text-sm'>Released on : {release_date}</h1>
            <Link href={`/${id}`}>
                <Image className='rounded-lg ' src={imagePath + poster_path} width={800} height={800} alt={title}/>
            </Link>
        </div>
    )
}

export default Movie
