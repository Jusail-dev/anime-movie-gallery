import './header.css'
const Header = ({ currentPage, onNaviagate }) => {
    return (
        <div className="header-container">
            <div className="left-sec">
                <h1>ANIVERSE</h1>
            </div>
            <div className="right-sec">
                <button className={`home ${currentPage == "home" && "btnselection"}`}
                    onClick={() => { onNaviagate("home") }}
                >
                    <span className='text'>HOME</span>
                    <i className='icon'><span className="material-symbols-outlined">
                        home
                    </span></i>
                </button>
                <button className={`watchlist ${currentPage == "watchlist" && "btnselection"}`}
                    onClick={() => { onNaviagate("watchlist") }}
                >
                    <span className='text'>WATCHLIST</span>
                    <i className='icon'><span className="material-symbols-outlined">
                        bookmark
                    </span></i>
                </button>
            </div>
        </div>
    )
}
export default Header;