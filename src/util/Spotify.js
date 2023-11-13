let accessToken
const clientId = "0bd13b84a6464422b1b5c9035bda4efe"
const redirectUri = "http://localhost:3000/"
//const redirectUri = "https://enchanting-narwhal-efd2fb.netlify.app/"

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken
    }
    // check for access token match:
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1]
      const expiresIn = Number(expiresInMatch[1])
      //clear parameters, allows to grab new access token when it expires.
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000)
      window.history.pushState("Access Token", null, "/")
      return accessToken
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
    }
  },

  // API Documentation: https://developer.spotify.com/documentation/web-api/reference/#/operations/search ???

  search(searchTerm) {
    const accessToken = Spotify.getAccessToken()

    return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      mode: "cors",
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return []
        }
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }))
      })
  },

  savePlaylist(playlistName, uriArray) {
    if (!playlistName || !uriArray) {
      return
    }
    const accessToken = Spotify.getAccessToken()
    const headers = { Authorization: `Bearer ${accessToken}` }
    let userId

    return fetch(`https://api.spotify.com/v1/me`, { headers: headers, mode: "cors" })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userId = jsonResponse.id
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          mode: "cors",
          method: "POST",
          body: JSON.stringify({ name: playlistName }),
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            const playlistId = jsonResponse.id
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
              headers: headers,
              mode: "cors",
              method: "POST",
              body: JSON.stringify({ uris: uriArray }),
            })
          })
      })
  },
}

export default Spotify
