import './App.css';
import Header from './header/Header';
import Map from './map/Map';
import People from './people/People'
import Places from './places/Places'

function App() {
  return (
    <div className="app">
      <div className='app_container'>
        <Header />
        <Map />
        <People />
        <Places />
      </div>
    </div>
  );
}

export default App;
