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

  search = () => {
    this.props.onSearch(this.state.term)
  }

  handleTermChange = (e) => {
    this.setState({ term: e.target.value })
    //alert(this.state.term);
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          onChange={this.handleTermChange}
          placeholder="Enter A Song, Album, or Artist"
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
