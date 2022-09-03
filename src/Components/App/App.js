import React, {useState}  from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

const initialPlaylistTracks = [
  {name: 'One', artist: 'Metallica', album: '...And Justice for All', id: 666},
  {name: 'Dark City', artist: 'Iced Earth', album: 'Dystopia', id: 667},
  {name: 'Legend and the Lore', artist: 'Falconer', album: 'Northwind', id: 777}
];

const initialSearchResults = [
  {id: 1, name: 'Blood for Blood', artist: 'Lord of the Lost', album: 'Die Tomorrow', uri: 'one.uri'},
  {id: 2, name: 'Dozing Green', artist: 'Dir En Grey', album: 'Uroboros', uri: 'one.uri'},
  {id: 3, name: 'Path', artist: 'Apocalyptica', album: 'Cult', uri: 'one.uri'}
];

function App() {
  const [playlistName,setPlaylistName] = useState('laulu'); 
  const [playlistTracks, setPlaylistTracks] = useState(initialPlaylistTracks);
  const [searchResults, setSearchResults] = useState(initialSearchResults);

  const addTrack = (track) => {   
    if(playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }else{      
      setPlaylistTracks([...playlistTracks, track] ); //spread-Operator
    }         
  }
  
  const removeTrack = (track) => {
    if(playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        setPlaylistTracks(...[playlistTracks.filter(remainingTracks => remainingTracks.id !== track.id)] );
      }
  }
  
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {    
    const tracksURIs = playlistTracks.map(track => track.artist);    
    alert(JSON.stringify(tracksURIs))        
  }

  const search = (searchTerm) => {
    setSearchResults(Spotify.search(searchTerm));  
  }

  return (
    <div>        
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
          <div className="App-playlist">                   
            <SearchResults searchResults={searchResults} onAdd ={addTrack} />
            <Playlist 
                playlistName={playlistName} 
                playlistTracks={playlistTracks} 
                onRemove={removeTrack}
                onNameChange={updatePlaylistName}   
                onSave={savePlaylist} 
            /> 
          </div>
        </div> 
    </div> 
  );
}


export default App;