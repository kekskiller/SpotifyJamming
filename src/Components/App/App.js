import React, { useState } from "react"
import "./App.css"
import SearchBar from "../SearchBar/SearchBar"
import Playlist from "../Playlist/Playlist"
import SearchResults from "../SearchResults/SearchResults"
import Spotify from "../../util/Spotify"

const initialSearchResults = []

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
