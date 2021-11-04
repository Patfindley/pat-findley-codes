import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import {useTheme} from './theme/useTheme';
import { getFromLS } from './utils/storage';
import { ReactComponent as Moon } from './assets/moon.svg';
import { ReactComponent as Sun } from './assets/sun.svg';

const Wrapper = styled.li`
	padding: 48px;
	text-align: center;
	border-radius: 4px;
	border: 1px solid #000;
	list-style: none;
`;

const Container = styled.ul`
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(4, 1fr);
	margin-top: 3rem;
	padding: 10px;
`;

const SunIcon = styled(Sun)`
  fill: ${({ theme }) => theme.colors.text};
  width: 24px;
`

const MoonIcon = styled(Moon)`
  fill: ${({ theme }) => theme.colors.text};
  width: 20px;
`

const ThemeSelector = (props) => {
	const themesFromStore = getFromLS("all-themes");
	const [data, setData] = useState(themesFromStore.data);
	const [themes, setThemes] = useState([]);
	const { setMode } = useTheme();

	const themeSwitcher = (selectedTheme) => {
		console.log(selectedTheme);
		setMode(selectedTheme);
		props.setter(selectedTheme);
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

	// const ThemeCard = (props) => {
  
	// 	return (
	// 		<Wrapper
	// 			style={{
	// 				backgroundColor: `${data[_.camelCase(props.theme.name)].colors.body}`,
	// 				color: `${data[_.camelCase(props.theme.name)].colors.text}`,
	// 				fontFamily: `${data[_.camelCase(props.theme.name)].font}`,
	// 			}}>
	// 			<ThemedButton
	// 				onClick={(theme) => themeSwitcher(props.theme)}
	// 				style={{
	// 					backgroundColor: `${
	// 						data[_.camelCase(props.theme.name)].colors.body
	// 					}`,
	// 					color: `${data[_.camelCase(props.theme.name)].colors.text}`,
	// 					fontFamily: `${data[_.camelCase(props.theme.name)].font}`,
	// 				}}>
	// 				{props.theme.name}
	// 			</ThemedButton>
	// 		</Wrapper>
	// 	);
	// };

	return (
		<div>
      {props.theme.name === "light" ? 
      <MoonIcon onClick={(theme) => themeSwitcher(props.theme)} /> : 
      <SunIcon onClick={(theme) => themeSwitcher(props.theme)} />
      }
			{/* <Container>

						<ThemeCard theme={props.theme} 
            key={props.theme.id} 
            />

			</Container> */}
			{/* <Container>
				{themes.length > 0 &&
					themes.map((theme) => (
						<ThemeCard theme={data[theme]} key={data[theme].id} />
					))}
			</Container> */}
		</div>
	);
};

export default ThemeSelector;