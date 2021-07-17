import { createGlobalStyle, ThemeProvider } from 'styled-components'


const theme = {
  colors: {
    primaryElement: '#6F92BB',
    secondaryElement: '#5579A1',
    primaryText: '#2E7BB4',
    secondaryText: '#388BB0',
    tertiaryText: '#2F4A71',
    backgroundDefault: '#D9E6F6',
    backgroundSecondary: '#F1F9FE',
    gray1: '#333333',
    gray2: '#5A5A5A',
    gray3: '#999999',
    gray4: '#C5C6CA',
    gray5: '#F4F4F4',
    white: '#FFFFFF',
  },
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background-color: ${({ theme }) => theme.colors.backgroundDefault};
  }
`
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
