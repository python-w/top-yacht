import "./App.css";
import "./custom.scss";
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
import CustomTheme from './customTheme';
import ClubSetup from './components/Screens/ClubSetup';

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />
      <Container sx={{[CustomTheme.breakpoints.up("sm")]: {maxWidth: '100%'}}}>
        <ClubSetup />
      </Container>
    </ThemeProvider>
  );
}

export default App;
