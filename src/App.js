import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header> </Header>

        <Router>
          <nav>
            <ul>
              <il>
                <Link to="/">Home    </Link>
              </il>
              <il>
                <Link to="/WatchList">Watclist</Link>
              </il>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid/>}></Route>
            <Route path="/Watchlist" element={<Watchlist/>}></Route>

          </Routes>
        </Router>
      </div>
      <Footer> </Footer>
    </div>
  );
}

export default App;
