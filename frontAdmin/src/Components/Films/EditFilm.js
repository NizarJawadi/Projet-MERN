import React, { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import {loadSinglefilm,updatefilm} from "../../Redux/actions/filmsAction";

import {loadCategories} from "../../Redux/actions/categoriesAction";

import {useDispatch, useSelector} from "react-redux";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
const EditFilm=()=>{
 const [state, setState] = useState({
    nomfilm: "", trailerF: "", tempsF:"",
    descriptionF:"",prixF:"",categorie:"",

 });

 const [cat, setCat] = useState([])
 const [files, setFiles] = useState("")

 const dispatch = useDispatch();
 const navigate = useNavigate();
 const params = useParams();
 const _id=params._id;
 useEffect(() => {
 dispatch(loadSinglefilm(_id));
 //dispatch(loadSpecialites());
 dispatch(loadCategories());
 //dispatch(loadAuteurs());
 setFiles("");
 },[_id,dispatch]);

 const film = useSelector((state) => state.allfilms.film);
 const categories = useSelector((state)=>state.allcategories.categories);
 //const editeurs = useSelector((state) =>state.allediteurs.editeurs);
 //const listeauteurs = useSelector((state) =>state.allauteurs.auteurs);

 useEffect(()=>{
 setState(film);
 setFiles(film.imageF)
 },[film]);
 const handleSubmit = async(event)=> {
 event.preventDefault();
 console.log(cat)
 const fil={
 _id:_id,
 nomfilm: state.nomfilm,
 trailerF:state.trailerF,
 tempsF:state.tempsF,
 descriptionF:state.descriptionF,
 prixF:state.prixF,
 categorie:cat.length>0?cat:state.categorie,
 imageF : files[0].file.name
 

 };
 dispatch(updatefilm(fil));
 navigate("/films");
 }
 const handelInputChange=(e)=>{
 const {name,value}=e.target;
 setState({...state,[name]:value});
 }
 /*
 const labelmaised=()=>{
 if( state.maised){
 if( state.maised.maisonedit) return "Editeur :"+state.maised.maisonedit
 }
 else return null
 }
 */
 const labelcategorie=()=>{
 if( state.categorie){
 if( state.categorie.nomC) return "categorie :"+state.categorie.typeC
 }
 else return null
 }
 /*
 const labelauteur=()=>{
 if(state.auteurs) {
 let ch=""
 state.auteurs.map((aut)=>{
 if(aut.nomauteur)
 ch = ch+aut.nomauteur
 })
 return ch
 }
 else return null
 }
 */
 const handleCategories=(event)=>{
 setState({...state,"categories": []});

 setCat(event.target.value);

 }

 return (

 <div className="container">

 <form style={{ marginLeft: 8}}>
 <div>
 <Button color="secondary" variant="contained"
onClick={(event)=>handleSubmit(event)}>Modifier</Button>
 </div>
 <FormControl>
 <TextField name="nomfilm"
 variant="outlined"
label="nomfilm"
value={state.nomfilm}
 onChange={handelInputChange}
 required
style={{ margin: 10}}/>
 <TextField name="trailerF"
 variant="outlined"
label="trailerF"
value={state.trailerF}
 onChange={handelInputChange}
 required
style={{ margin: 10}}/>
 <TextField name="tempsF"
 variant="outlined"
type="text"
label="tempsF"
value={state.tempsF}
 onChange={handelInputChange}
 style={{ margin: 10}}/>
 <TextField name="descriptionF"
 variant="outlined"
type="text"
label="descriptionF"
value={state.descriptionF}
 onChange={handelInputChange}
 style={{ margin: 10}}/>
 <TextField name="prixF"
 variant="outlined"
type="Number"
label="prixF"
value={state.prixF}
 onChange={handelInputChange}
 style={{ margin: 10}}/>

<TextField
 name="categories"
 variant="outlined"
 select
 label={labelcategorie()}
 SelectProps={{multiple: false}}
 value={cat?cat:state.categorie}
 helperText="Sélectionner un categorie "
 onChange={(event)=>handleCategories(event)}
 >
 {
 categories ?
 categories.map((cat)=>
 <MenuItem key={cat._id}
value={cat._id}>{cat.nomC}</MenuItem>
 )
 :null
 }
 </TextField> 
 

 </FormControl>
 </form>

 <h4>Télécharger Image</h4>
 <FormControl>
 <div style={{width:300, height:50}}>
 <FilePond
 files={files}
 allowMultiple={false}
 onupdatefiles={setFiles}
 labelIdle='<span class="filepond--label-action">Browse One</span>'
 />
 </div>
 </FormControl>
 </div>
 );}
export default EditFilm