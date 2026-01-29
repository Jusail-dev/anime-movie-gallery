import './watchlist.css'
import Movie from './Movie';


const Watchlist = () => {
    const arry = [<Movie />, <Movie />, <Movie />, <Movie />, <Movie />, <Movie />, <Movie />, <Movie />]

    return (

        <div className="watchlist-container">

            <div className="titles-container">
                <h2>MY WATCHLIST</h2>
                <p><span>{arry.length}</span> animes</p>
            </div>
            {true &&
                <div className="movie-container-parnt">
                    <div className="movies-container">
                        {arry}
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