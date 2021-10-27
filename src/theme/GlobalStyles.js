import styled, { createGlobalStyle, keyframes } from 
'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.5s linear;
  }
`

const vertBounce = keyframes`
0%{top: 0em}
40%{top: 0em}
43%{top: -0.3em}
46%{top: 0em}
48%{top: -0.1em}
50%{top: 0em}
100%{top: 0em;}
`

export const Link = styled.a`
transition: 300ms;
animation: ${vertBounce} 4.5s infinite linear;
position: relative;
text-decoration: none;
color: ${({ theme }) => theme.colors.text};
text-decoration: none;
&:hover {
  color: ${({ theme }) => theme.colors.waveThree};
  transition: color 200ms;
  }
`