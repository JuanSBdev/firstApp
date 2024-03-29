import './App.css';
import imageRickAndMorty from './img/rick-morty.png';
import {useState} from 'react';
import Characters from './components/Characters'

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
      setCharacters(characterApi.results);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Primer App</h1>
        {characters ? (
          <>
            <Characters characters={characters} setCharacters={setCharacters} />
          </>
        ) : (
          <>
          <img src={imageRickAndMorty} alt="Richie" className="img-home"></img>
          <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
    
  );
}

export default App;
