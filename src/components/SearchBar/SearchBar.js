import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      searchInput: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({searchInput: event.target.value}, () => {
      this.props.filterProjects(this.state.searchInput)
    })
  }

  render() {
    return (
      <div className='search-wrap'>
      <form className="search-form">
        <input className="search-input"
          type="text"
          placeholder="🔎"
          name="input"
          onChange={event => this.handleChange(event)}
        />
      </form>
      </div>
    )
  }
}

export default SearchBar;
