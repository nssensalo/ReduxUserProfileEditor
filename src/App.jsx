import ProfileDisplay from './components/profileDisplay.jsx';
import './App.css'
import { CssBaseline, Container } from '@mui/material'; 


function App() {
  

  return (
      <Container maxWidth="sm" sx={{mt:4, mb: 4}}>
          <ProfileDisplay />
      </Container>
  )
}

export default App;
