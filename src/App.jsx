import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import FeaturedAnime from './components/FeaturedAnime/FeaturedAnime'
import GenereSection from './components/GenreSection/GenreSection'
import Watchlist from './components/WatchList/Wathlist'
import api from './api/api'

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [animeByGenre, setAnimeByGenre] = useState({})
  const generes = [
    {
      mal_id: 1,
      name: "Action"
    },

    {
      mal_id: 2,
      name: "Adventure"
    },

    {
      mal_id: 5,
      name: "Avant Garde"
    },

    {
      mal_id: 46,
      name: "Award Winning"
    }

  ]
  const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem("watchlist")) || [])
  useEffect(() => {
    addWatchListToLocalStorage()
  }, [watchlist])

  function addWatchListToLocalStorage() {
    localStorage.setItem("watchlist", JSON.stringify(watchlist))
  }


  useEffect(() => {
    async function fetchAnime() {
      const data = {}

      for (let i = 0; i < generes.length; i++) {
        const generId = generes[i].mal_id

        await new Promise(r => setTimeout(r, 500))

        const response = await api.get(
          `/anime?genres=${generId}&limit=6`
        )

        data[generId] = response.data.data
      }
      setAnimeByGenre(data)
    }
    fetchAnime()

  }, [])

  return (
    <>
      <div className="container">
        <Header currentPage={currentPage} onNaviagate={setCurrentPage} />
        <div className="main-container">
          {currentPage == "home" &&
            <>
              <FeaturedAnime
                watchlistState={[watchlist, setWatchlist]}
              />
              {
                generes !== null &&
                generes.map((gener) => (
                  <GenereSection key={gener.mal_id}
                    titile={gener.name}
                    animes={animeByGenre[gener.mal_id]}
                    watchlistState={[watchlist, setWatchlist]}
                  />
                ))
              }
            </>
          }
          {currentPage == "watchlist" &&
            <Watchlist
              watchlistState={[watchlist, setWatchlist]}
            />
          }
        </div>
      </div>
    </>
  )
}

export default App
