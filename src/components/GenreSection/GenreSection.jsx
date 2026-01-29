import './genresection.css'
import Movie from './Movie'
import { useEffect, useState } from 'react'

const GenereSection = ({ titile, animes = [], watchlistState }) => {

    return (
        <div className="generesec-container" color='red'>
            <div className="title-sec">
                <h2>{titile}</h2>
            </div>
            <div className="movies-sec">
                {animes.map((anime) => (
                    <Movie key={anime.mal_id} 
                    id={anime.mal_id} 
                    url={anime.images.jpg.image_url} 
                    title={anime.title} score={anime.score}
                    watchlistState={watchlistState}
                    />
                ))}

            </div>
        </div>
    )
}
export default GenereSection