import './watchlist.css'

const Movie = ({ id, title, url, watchlistState }) => {

    const [watchlist, setWatchlist] = watchlistState

    function removeFromWatchList() {
        setWatchlist(preList => preList.filter(idItem => idItem !== id))
    }

    return (
        <div className="movie-A">
            <div className="poster-A" style={{ backgroundImage: `url(${url})` }}>
                <div className="top-A">
                    <div className="watchlistbtn-A"
                        onClick={() => {
                            removeFromWatchList()
                        }}
                    >
                        <i><span className="material-symbols-outlined favorite-active">favorite</span></i>
                    </div>
                </div>
            </div>
            <p>{title}</p>
        </div>
    )
}
export default Movie