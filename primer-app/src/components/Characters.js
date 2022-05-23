export default function Characters(props){
    const { characters, setCharacters } = props;
    const resetCharacters = () => {
        console.log ('reseteando')
        setCharacters(null);
    }
    console.log(characters);
    return(
        <div className= 'characters'>
            <h1>Personajes</h1>
            <span className='back-home' onClick={ resetCharacters }>Back to HOME</span>
            <div className="container-characters">
                { characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt= { character.name }></img>
                        </div>
                        <div>
                            <h3> {character.name} </h3>
                            <h6>
                                { character.status === 'Alive' ? (
                                <>
                                    <span className="alive"/>
                                    Alive
                                </>
                                ) : (
                                <>
                                    <span className="dead" />
                                    Dead
                                
                                </>
                                )}
                        </h6>
                        <p className="text-grey">
                            <span> Episodios: </span>
                            <span> { character.episode.length} </span>
                        </p>
                        <p className="text-grey"><span>Especie:</span></p>
                        <span> { character.species} </span>
                        </div>
                    </div>
                    
                ))} 
            </div> 
                                    <span className="back-home" onClick={ resetCharacters }>Back HOME</span>
        </div>
    )
}