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

    useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  
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
                <Link to="/WatchList">Watclist</Link>
              </il>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies}/>}></Route>
            <Route path="/Watchlist" element={<Watchlist/>}></Route>
          </Routes>
        </Router>
      </div>
      <Footer> </Footer>
    </div>
  );
}

export default App;
