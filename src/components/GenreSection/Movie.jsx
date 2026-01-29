import './genresection.css'

const Movie = ({ url, id, title, score, watchlistState }) => {

    const [watchlist, setWatchlist] = watchlistState

    const divStyle = {
        backgroundImage: `url(${url})`,
    };

    function AddOrRemoveFromWatchlist() {
        if (watchlist.includes(id)) {
            setWatchlist((prevList) => prevList.filter((idItem) => idItem !== id))
        } else {
            setWatchlist(preList => [...preList, id])
        }
    }

    return (
        <div className="movie">
            <div className="poster" style={divStyle}>
                <div className="top">
                    <div className="watchlistbtn"
                        onClick={() => { AddOrRemoveFromWatchlist() }}
                    >
                        <i><span className={`material-symbols-outlined ${watchlist.includes(id) ? "favorite-active" : "favorite"}`}>favorite</span></i>
                    </div>
                </div>
                <div className="button">
                    <div className="rating">
                        <i><span className="material-symbols-outlined filled">star</span></i>
                        <span>{score}</span>
                    </div>
                </div>
            </div>
            <p>{title}</p>
        </div>
    )
}
export default Movie