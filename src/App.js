import { Route, Routes, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
//Components
import Footer from './components/Footer';
import Navbar from '../src/shared/Navbar'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails';
import Shows from './components/Shows';
import Movies from './components/Movies';
import Characters from './components/Characters';
import ActorDetailsPage from './components/ActorDetailsPage';
import Loginpage from './components/Loginpage';
//Context
import MovieContextProvider from './context/MovieContextProvider';
import ShowContextProvider from './context/ShowContextProvider';
import TrndFilmsContextProvider from './context/TrendFilmsContextProvider';
import TrendShowsContextProvider from './context/TrendShowsContextProvider';

function App() {
  const [navbarValue, setNavbarValue] = useState('')
  const [bodyTheme, setBodyTheme] = useState('light')

  const setBodyThemeHandler = () => {
    setBodyTheme((preve) => preve === 'dark' ? 'light' : 'dark')
  }

  const handleNavbarChange = ({newValue}) => {
    setNavbarValue(newValue)
  };
  return (
    <div className={`App bg-${bodyTheme}`}>
      <ThemeContext.Provider value={[bodyTheme, setBodyThemeHandler]}>
        <Navbar setBodyThemeHandler={setBodyThemeHandler} bodyTheme={bodyTheme} onChange={handleNavbarChange}/>
        <MovieContextProvider>
          <ShowContextProvider>
            <TrndFilmsContextProvider>
              <TrendShowsContextProvider>
                <Routes>
                  <Route path='*' element={<Navigate bodyTheme={bodyTheme} to='/home'/>} />
                  <Route path='/home' element={<Home bodyTheme={bodyTheme} navbarValue={navbarValue}/>}/>
                  <Route path='/shows/:genreId' element={<Shows bodyTheme={bodyTheme} navbarValue={navbarValue}/>}/>
                  <Route path='/movies/:genreId' element={<Movies bodyTheme={bodyTheme} navbarValue={navbarValue} />} />
                  <Route path='/:movieOrTv/details/:id' element={<MovieDetails bodyTheme={bodyTheme}/>}/>
                  <Route path='/:type/:id/characters' element={<Characters bodyTheme={bodyTheme}/>}/>
                  <Route path='/person/:id/details' element={<ActorDetailsPage bodyTheme={bodyTheme}/>}/>
                  <Route path='account/:loginOrSignup' element={<Loginpage bodyTheme={bodyTheme}/>} />
                </Routes>
                <Footer bodyTheme={bodyTheme}/>
              </TrendShowsContextProvider>
            </TrndFilmsContextProvider>
          </ShowContextProvider>
        </MovieContextProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
