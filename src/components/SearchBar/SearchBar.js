import React, { useRef } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 22%;
  display: flex;
  justify-content: center;
  z-index: 2;
  @media only screen and (max-width: 1200px) {
      display: none;
  }
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
  background-color: ${({ theme }) => theme.colors.body};
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.text};
  -webkit-box-shadow: ${({ theme }) => theme.colors.WebkitBoxShadow}; 
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  transition: all 800ms;
  &:hover {
    border-color: ${({ theme }) => theme.colors.waveOne};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.waveOne};
    width: 80%;
    opacity: 0.8;
    transition: all linear 0.4s, width 500ms ease;
  }
`

const SearchBar = ({ filterProjects }) => {
  const searchValue = useRef()

  const submitHandler = (e) => {
    if (e.key === "Enter") { 
      e.preventDefault() 
    }
}

    return (
			<Wrap>
				<SearchForm>
					<Input
						type="text"
						placeholder="search topic"
						ref={searchValue}
						name="input"
						onChange={() => filterProjects(searchValue.current.value)}
            onKeyPress={submitHandler}
					/>
				</SearchForm>
			</Wrap>
		);
}

export default SearchBar;
