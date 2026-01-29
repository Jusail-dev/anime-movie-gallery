import { useState, useEffect, use } from 'react'
import './featuredanime.css'
import api from '../../api/api'

const FeaturedAnime = () => {
    const [featuredAnimeData, setFeaturedAnimeData] = useState(null)

    useEffect(() => {
        api.get("/random/anime")
            .then((res) => {
                setFeaturedAnimeData(res.data.data)
            })
            .catch((err) => {
                console.log("Error ", err)
            })


    }, [])

    const divStyle = {
        backgroundImage: `url(${featuredAnimeData?.images?.jpg?.large_image_url || ""})`,
    };



    return (
        <div className="featuredanime-container" style={divStyle}>
            <h1>{featuredAnimeData?.title_english}</h1>
            <div className="episodes-rating">
                <div className="episodes">
                    <p><span>{featuredAnimeData?.episodes}</span> Episodes</p>
                </div>

                <div className="rating">
                    <i><span className="material-symbols-outlined filled">star</span></i>
                    <i><span>{featuredAnimeData?.score}</span></i>

                </div>
            </div>
            <div className="watchlistbtn"> <i><span className="material-symbols-outlined">add</span></i>ADD TO WATCHLIST</div>
        </div>
    )
}

export default FeaturedAnime