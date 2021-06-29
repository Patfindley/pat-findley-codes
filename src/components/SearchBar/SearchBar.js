import React, { useRef } from 'react'
import './SearchBar.css'

const SearchBar = ({ filterProjects }) => {
  const searchValue = useRef()
  console.log(window.location.href)

    return (
      <div className='search-wrap'>
      <form className="search-form">
        <input className="search-input"
          type="text"
          placeholder="🔎"
          ref={searchValue}
          name="input"
          onChange={() => filterProjects(searchValue.current.value)}
        />
      </form>
      </div>
    )
}

export default SearchBar;
