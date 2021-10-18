import React, { useRef } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 22%;
  display: flex;
  justify-content: center;
  z-index: 2;
`

const SearchForm = styled.form`
  text-align: center;
  width: 100%;
  height: 50px;
  & input:focus, textarea:focus {
    outline-color: ${({ theme }) => theme.colors.waveFive};
  }
`

const Input = styled.input`
  width: 50%;
  height: 100%;
  border-radius: 10px;
  border: solid #c8ccd0 1px;
  transition: all 800ms;
  &:hover {
    border-color: ${({ theme }) => theme.colors.waveOne};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.waveOne};
    width: 80%;
    transition: box-shadow linear 0.2s, width 500ms ease;
  }
`

const SearchBar = ({ filterProjects }) => {
  const searchValue = useRef()

    return (
      <Wrap>
      <SearchForm>
        <Input
          type="text"
          placeholder="search topic"
          ref={searchValue}
          name="input"
          onChange={() => filterProjects(searchValue.current.value)}
        />
      </SearchForm>
      </Wrap>
    )
}

export default SearchBar;
