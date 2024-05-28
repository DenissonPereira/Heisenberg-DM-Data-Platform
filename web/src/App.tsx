import { Container } from "./styles"
import { HDMProvider } from "./contexts/HDMContext"
import { RoutesApp } from "./routes"
import { ThemeProvider } from "./contexts/themeContext"
import { GlobalStyle } from "./core"


export function App() {

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Container>
        <HDMProvider>
          <RoutesApp />
        </HDMProvider>
      </Container>
    </ThemeProvider>
  )
}

export default App
