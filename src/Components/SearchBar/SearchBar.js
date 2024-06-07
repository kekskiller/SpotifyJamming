import "./SearchBar.css"
import React, { useState } from "react"

const SearchBar = ({ onSearch, searchTerm }) => {
  const [term, setTerm] = useState(searchTerm || "")

  const search = () => {
    onSearch(term)
  }

  const handleTermChange = (e) => {
    localStorage.setItem("searchTerm", term)
    setTerm(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      search()
    }
  }

  return (
    <div className="SearchBar">
      <input
        id="searchInput"
        onChange={handleTermChange}
        value={term}
        placeholder="Enter A Song, Album, or Artist"
        onKeyPress={handleKeyPress}
        onFocus={(e) => (e.target.placeholder = "")}
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  )
}

export default SearchBar
