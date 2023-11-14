import React, { useState } from "react"
import "./App.css"
import SearchBar from "../SearchBar/SearchBar"
import Playlist from "../Playlist/Playlist"
import SearchResults from "../SearchResults/SearchResults"
import Spotify from "../../util/Spotify"

/* const initialPlaylistTracks = [
  {name: 'One', artist: 'Metallica', album: '...And Justice for All', id: 666},
  {name: 'Dark City', artist: 'Iced Earth', album: 'Dystopia', id: 667},
  {name: 'Legend and the Lore', artist: 'Falconer', album: 'Northwind', id: 777}
];*/

const initialSearchResults = []
//   { id: "1a", name: "Blood for Blood", artist: "Lord of the Lost", album: "Die Tomorrow", uri: "one.uri" },
//   { id: "2v", name: "Dozing Green", artist: "Dir En Grey", album: "Uroboros", uri: "one.uri" },
//   { id: "4g", name: "Path", artist: "Apocalyptica", album: "Cult", uri: "one.uri" },
// ]

function App() {
  const [playlistName, setPlaylistName] = useState("")
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [searchResults, setSearchResults] = useState(initialSearchResults)

  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return
    } else {
      setPlaylistTracks([...playlistTracks, track]) //spread-Operator
    }
  }

  const removeTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      setPlaylistTracks(...[playlistTracks.filter((remainingTracks) => remainingTracks.id !== track.id)])
    }
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name)
  }

  const savePlaylist = () => {
    const tracksURIs = playlistTracks.map((track) => `spotify:track:${track.id}`)
    Spotify.savePlaylist(playlistName, tracksURIs).then(() => {
      setPlaylistName("")
      setPlaylistTracks([])
    })
  }

  const search = async (searchTerm) => {
    let result = await Spotify.search(searchTerm)
    setSearchResults(result)
  }

  return (
    <div>
      <h1 className="header">
        spotify ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
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
  )
}

export default App
