import './App.css';
import Header from './header/Header';
import Map from './map/Map';
import People from './people/People'

function App() {
  return (
    <div className="app">
      <div className='app_container'>
        <Header />
        <Map className='map' />
        <People className='people' />
      </div>
    </div>
  );
}

export default App;
