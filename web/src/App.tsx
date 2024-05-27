import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./core"
import { Container } from "./styles"
import { GlobalStyles } from "./core"


export function App() {

  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        Hello world
        <button onClick={themeToggler}>botao</button>
      </Container>
    </ThemeProvider>
  )
}

export default App
