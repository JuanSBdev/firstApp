import logo from './logo.svg';
import './App.css';
import imageRickAndMorty from './img/rick-morty.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="tittle">Primer App</h1>
        <img src={imageRickAndMorty} alt="Richie" className="img-home"></img>
      </header>
    </div>
  );
}

export default App;
