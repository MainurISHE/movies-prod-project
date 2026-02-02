import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [showWatched, setShowWatched] = useState(false)

  const addMovie = (name) => {
    const newMovie = {
      id: Date.now(),
      name,
      watched: false,
      reaction: null
    }

    setMovies([...movies, newMovie])
  }

  const toggleWatched = (id) => {
    setMovies(movies.map(movies => movie.id === id
      ? {...movie, watched: !movie.watched, reaction: null }
      : movie
    ))
  }

  const setReaction = (id, reaction) => {
    setMovies(movies.map(movies => movie.id === id
      ? {...movie, reaction}
      : movie
    ))
  }

  const filteredMovies = movies.filter(movie =>
    showWatched ? movie.watched : !movie.watched
  )

  return (
    <>
      
    </>
  )
}

export default App
