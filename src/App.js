//Components
import Footer from './components/Footer';
import Navbar from '../src/shared/Navbar'
import Home from './components/Home'
//Context
import MovieContextProvider from './context/MovieContextProvider';
import ShowContextProvider from './context/ShowContextProvider';
import TrendsContextProvider from './context/TrendsContextProvider';
function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <ShowContextProvider>
          <TrendsContextProvider>
            <Navbar/>
            <Home/>
            <Footer />
          </TrendsContextProvider>
        </ShowContextProvider>
      </MovieContextProvider>
    </div>
  );
}

export default App;
