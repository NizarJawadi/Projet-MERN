import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';
import ListFilms from './Components/Films/ListFilms';
import AjoutFilm from './Components/Films/AjoutFilm';
import EditFilm from './Components/Films/EditFilm'; 
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Login from './Authentification/Login'; 
import ListCards from './Components/Client/ListCards';
function App() {
return (
<>
 <Router>
 <Box sx={{ flexGrow: 1 }}>
 <AppBar position="static">
 <Toolbar>
 <IconButton
 size="large"
 edge="start"
 color="inherit"
 aria-label="menu"
 sx={{ mr: 2 }}
 >
 </IconButton>
 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
 Film Store
 </Typography>
<Link to="/films"><Button color="error">Liste des Filmes</Button></Link>
 </Toolbar>
 </AppBar>
 </Box>
 <Routes>
 <Route path="/" element={<Login/>}></Route>
 <Route exact path="/films" element={<ListFilms/>}></Route>
 <Route path="/addFilms" element={<AjoutFilm/>}></Route>
 <Route path="/editFilms/:_id" element={<EditFilm/>}></Route>
</Routes>
 </Router>
</>
 );
}
export default App;