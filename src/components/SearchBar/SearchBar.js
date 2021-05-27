import React from 'react'

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
      <form className="search-form">
        <input className="search-input"
          type="text"
          placeholder="Try searching titles or technologies"
          name="input"
          onChange={event => this.handleChange(event)}
        />
      </form>
    )
  }
}

export default SearchBar;
