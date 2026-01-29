import './watchlist.css'

const Movie = () => {
    return (
        <div className="movie-A">
            <div className="poster-A" style={{ backgroundImage: 'url(../../src/assets/aot.webp)' }}>
                <div className="top-A">
                    <div className="watchlistbtn-A">
                        <i><span className="material-symbols-outlined favorite">favorite</span></i>
                    </div>
                </div>
                <div className="button">
                    {/* <div className="rating-A">
                        <i><span className="material-symbols-outlined filled">star</span></i>
                        <span>8.9</span>
                    </div> */}
                </div>
            </div>
            <p>Attack On Titan</p>
        </div>
    )
}
export default Movie