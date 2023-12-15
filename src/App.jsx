import './App.css'
import { createTheme, ThemeProvider } from '@mui/material';
import ResponsiveAppBar from './components/AppBar'
const theme = createTheme({
  palette: {
    primary: {
      main: "#4e4e4e",
      light: "#fff",
      dark: "#000"
    },
    secondary: {
      main: "#ghghgh"
    }

  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
      </ThemeProvider>
    </>
  )
}

export default App
