import logo from './logo.svg';
import './App.css';
import imageRickAndMorty from './img/rick-morty.png';
function App() {

  const reqApi = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json()
    console.log(characterApi);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Primer App</h1>
        <img src={imageRickAndMorty} alt="Richie" className="img-home"></img>
        <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
      </header>
    </div>
  );
}

export default App;
