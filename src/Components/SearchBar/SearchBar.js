import './SearchBar.css';
import React from "react";

/* In SearchBar.js, create a method called search that passes the state of the term to this.props.onSearch.

In the SearchBar component, create a constructor method with a call to super(props).

In SearchBar.js create a method called handleTermChange with the following functionality:

Accepts an event argument
Sets the state of the search bar’s term to the event target’s value. */
class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this)
        this.state = {term: ''};
    }

    search = () => {
        this.props.onSearch(this.state.term)
    }
    
    handleTermChange = (e) => 
    {
        this.setState({term: e.target.value});   
        //alert(this.state.term);  
         
    }
    render (){
        return(
        <div className='SearchBar'>
            <input onChange={this.handleTermChange} placeholder='Enter A Song, Album, or Artist' />
            <button className='SearchButton'> SEARCH </button>
        </div>
        )
    }
}

export default SearchBar;