import "./SearchBar.css"
import React from "react"
import Spotify from "../../util/Spotify"

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.search = this.search.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
    this.state = { term: "" }
  }

  async componentDidMount() {
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)
    if (!accessTokenMatch && !expiresInMatch) {
      await Spotify.getAccessToken()
    }
  }

  search = (e) => {
    this.props.onSearch(this.state.term)
  }

  handleTermChange = (e) => {
    this.setState({ term: e.target.value })
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      this.search()
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          id="searchInput"
          onChange={this.handleTermChange}
          placeholder="Enter A Song, Album, or Artist"
          onKeyPress={this.handleKeyPress}
          onFocus={(e) => (e.target.placeholder = "")}
        />

        <button className="SearchButton" onClick={this.search}>
          {" "}
          SEARCH{" "}
        </button>
      </div>
    )
  }
}

export default SearchBar
