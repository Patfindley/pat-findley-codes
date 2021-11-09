import styled, { keyframes } from 'styled-components'

const ProjectWrap = styled.section`
  text-align: left;
	font-size: 1.3em;
	line-height: 1.4;
	padding: 20px;
  background-color: ${({ theme }) => theme.colors.body};
	border-radius: 10px;
	width: 20%;
  margin: 20px 0;
	box-shadow: 0px 3px 35px 1px rgba(0, 0, 0, 0.19);
  transition: all 0.5s linear;
  z-index: 2;
`

const ProjectInfo = styled.h4`
  font-weight: 500;
  transition: all 0.5s linear;
`

export const vertBounce = keyframes`
0%{top: 0em}
40%{top: 0em}
43%{top: -0.3em}
46%{top: 0em}
48%{top: -0.1em}
50%{top: 0em}
100%{top: 0em;}
`

export const Link = styled.a`
font-weight: 400;
color: ${({ theme }) => theme.colors.text};
text-decoration: none;
position: relative;
animation: ${vertBounce} 4.5s infinite linear;
transition: 300ms;
&:hover {
  color: ${({ theme }) => theme.colors.waveThree};
  transition: color 200ms;
  }
`

const Aside = ({ selectedProject }) => {
    return (
			<ProjectWrap>
				<h1>{selectedProject.name}</h1>
				<Link
					style={{ animationDelay: "0.07s" }}
					href={selectedProject.gitHub}
					target="_blank"
					rel="noreferrer">
					{" "}
					GitHub{" "}
				</Link>
				{selectedProject.deploy.length > 1 && (
					<Link
						style={{ animationDelay: "0.14s" }}
						href={selectedProject.deploy}
						target="_blank"
						rel="noreferrer">
						{" "}
						Deploy{" "}
					</Link>
				)}
				<ProjectInfo>
					<strong>Date:</strong> {selectedProject.date}
				</ProjectInfo>
				<ProjectInfo>
					<strong>Technologies:</strong> {selectedProject.technology.join(", ")}
				</ProjectInfo>
			</ProjectWrap>
		);
}

export default Aside;
