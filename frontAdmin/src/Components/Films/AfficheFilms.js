import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {useDispatch,useSelector} from "react-redux";
import {deletefilm} from "../../Redux/actions/filmsAction"
import { Link, useNavigate } from 'react-router-dom';
const AfficheFilms=()=>{

 const dispatch = useDispatch();
 const navigate = useNavigate();
 const handleDelete=(id)=>{
 if(window.confirm("sipprimer la catégorie O/N")) {
 dispatch(deletefilm(id));
 navigate("/");
 }
}
 const films = useSelector((state) =>state.allfilms.films);
 return(
 <>
 <Button variant="contained" color="success" size="medium">
 <Link to={"/addFilms"}
style={{"textDecoration":"none","color":"white"}}>
 Ajout
 </Link>
 </Button>


 <Grid container spacing={2} columns={15} marginTop={10}>
 {films.map((row) => (
 <Grid item xs={5} key={row._id}>
 <Card sx={{ maxWidth: 250 }} key={row._id}>
 <CardMedia
 component="img"
 height={230}
 image={"images/"+row.imageF}
 alt={row.nomfilm}
 />
 <CardContent>
 <Typography gutterBottom variant="h5" component="div">
 {row.nomfilm}
 </Typography>
 <Typography variant="body2" color="text.secondary">
 {row.prixF} TND
 </Typography>
 <Typography variant="body2" color="text.secondary">
 {row.categorie.typeC}
 </Typography>
 </CardContent>
 <CardActions>
 <Link to={"/editFilms/" + row._id}
style={{"textDecoration":"none","color":"white"}}> <Button variant="contained"
color="primary" size="small">Modifier</Button></Link>
 <Button variant="contained" color="error" size="small"
onClick={()=>handleDelete(row._id)}>Supprimer</Button>
 </CardActions>
 </Card>
 </Grid>
 )
 )
 }

 </Grid>
 </>
 )
 }
export default AfficheFilms