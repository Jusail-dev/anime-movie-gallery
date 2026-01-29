import './watchlist.css'
import Movie from './Movie';
import api from '../../api/api'
import { useEffect, useState } from 'react';


const Watchlist = ({ watchlistState }) => {
    const [watchlist, setWatchlist] = watchlistState
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        const fetchWithDelay = async () => {
            const result = [];

            for (const id of watchlist) {
                const res = await api.get(`/anime/${id}`);
                result.push(res.data.data);
                await new Promise((r) => setTimeout(r, 400));
            }

            setAnimes(result);
        };
        if (watchlist.length > 0) {
            fetchWithDelay();
        } else {
            setAnimes([]);
        }

    }, [watchlist])

    return (

        <div className="watchlist-container">

            <div className="titles-container">
                <h2>MY WATCHLIST</h2>
                <p><span>{animes.length}</span> animes</p>
            </div>
            {true &&
                <div className="movie-container-parnt">
                    <div className="movies-container">
                        {animes.map(anime =>
                            <Movie key={anime?.mal_id} id={anime?.mal_id} title={anime?.title} url={anime?.images.jpg.image_url}
                                watchlistState={watchlistState}
                            />
                        )}
                    </div>
                </div>
            }
            {false &&
                <div className="emptylist-container">
                    <div className="emptylist">
                        <h1>📺️</h1>
                        <h2>EMPTY LIST</h2>
                        <p>Add anime to your watchlist</p>
                    </div>
                </div>
            }
        </div>
    )
}
export default Watchlist;