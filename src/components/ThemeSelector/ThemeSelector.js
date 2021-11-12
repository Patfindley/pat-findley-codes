import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import {useTheme} from '../../theme/useTheme';
import { getFromLS } from '../../utils/storage';
import { ReactComponent as Moon } from '../../assets/moon.svg';
import { ReactComponent as Sun } from '../../assets/sun.svg';

const Wrapper = styled.div`
  position: fixed;
  top: 51px;
  left: 16px;
  cursor: pointer;
  z-index: 5;
`

const SunIcon = styled(Sun)`
  fill: ${({ theme }) => theme.colors.text};
  width: 24px;
  transition: all 0.5s;
  &:hover {
    fill: ${({ theme }) => theme.colors.waveOne};
  }
`

const MoonIcon = styled(Moon)`
  fill: ${({ theme }) => theme.colors.text};
  width: 20px;
  transition: all 0.5s;
  &:hover {
    fill: ${({ theme }) => theme.colors.waveOne};
  }
`

const ThemeSelector = (props) => {
  const themesFromStore = getFromLS("all-themes");
	const [data, setData] = useState(themesFromStore.data);
	const [themes, setThemes] = useState([]);
  const [currentTheme, setCurrentTheme] = useState(props.theme)
	const { setMode } = useTheme();

	const themeSwitcher = (selectedTheme) => {
		setMode(selectedTheme);
		props.setter(selectedTheme);
    setCurrentTheme(selectedTheme)
	};

	useEffect(() => {
		setThemes(_.keys(data));
	}, [data]);

	useEffect(() => {
		props.newTheme && updateTheme(props.newTheme);
	}, [props.newTheme]);

	const updateTheme = (theme) => {
		const key = _.keys(theme)[0];
		const updated = { ...data, [key]: theme[key] };
		setData(updated);
	};

	return (
		<Wrapper>
      {currentTheme.name === "light" ? 
      <MoonIcon onClick={() => themeSwitcher(data.dark)} /> : 
      <SunIcon onClick={() => themeSwitcher(data.light)} />
      }
		</Wrapper>
	);
};

export default ThemeSelector;