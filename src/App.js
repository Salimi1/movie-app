import { Route, Routes, Navigate } from 'react-router-dom';
//Components
import Footer from './components/Footer';
import Navbar from '../src/shared/Navbar'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails';
import Shows from './components/Shows';
//Context
import MovieContextProvider from './context/MovieContextProvider';
import ShowContextProvider from './context/ShowContextProvider';
import TrndFilmsContextProvider from './context/TrendFilmsContextProvider';
import TrendShowsContextProvider from './context/TrendShowsContextProvider';
function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <ShowContextProvider>
          <TrndFilmsContextProvider>
            <TrendShowsContextProvider>
              <Navbar/>
              <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/shows/:genreId' element={<Shows/>}/>
                <Route path='movie/details/:id' element={<MovieDetails/>}/>
              </Routes>
              <Footer/>
            </TrendShowsContextProvider>
          </TrndFilmsContextProvider>
        </ShowContextProvider>
      </MovieContextProvider>
    </div>
  );
}

export default App;
