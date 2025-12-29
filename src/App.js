import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

    const [movies, setMovies] = useState([]);
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchlist(prev => 
      prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]
    )
  }
  
  return (
    <div className="App">
      <div className='container'>
        <Header> </Header>
        <Router>
          <nav>
            <ul>
              <il>
                <Link to="/">Home</Link>
              </il>
              <il>
                <Link to="/Watchlist">Watclist</Link>
              </il>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={<MoviesGrid movies={movies} watchlist = {watchlist} toggleWatchlist={toggleWatchlist}/>}>
              </Route>
            <Route 
              path="/Watchlist" 
              element={<Watchlist movies ={movies} watchlist = {watchlist} toggleWatchlist={toggleWatchlist}/>}>
              </Route>
          </Routes>
        </Router>
      </div>
      <Footer> </Footer>
    </div>
  );
}

export default App;
