import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';
import { CartProvider } from "react-use-cart";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Login from './Authentification/Login'; 
import ListCards from './Components/Client/ListCards';
import CartProduct from './Components/Client/CartProduct';
import Registration from './Components/Client/Registration'
function App() {
return (
    <CartProvider> 
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
 <Link to="/"><Button color="error">Liste des Films</Button></Link>
 </Toolbar>
 </AppBar>
 </Box>
 <Routes>
 <Route path="/admin" element={<Login/>}></Route>
 <Route path="/" element={<ListCards/>}></Route>
 <Route path="/cart" element={<CartProduct/>}></Route>
 <Route path="/loginclient" element={<Registration/>}></Route>

</Routes>
 </Router>
 </CartProvider>
 );
}
export default App;