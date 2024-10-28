import { createGlobalStyle } from 'styled-components'

const cores = {
  branca: '#333',
  preta: '#111',
  cinza: '#EEEEEE',
  verde: '#10ac84'
}
export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body{
background-color: ${cores.preta}
}
`
