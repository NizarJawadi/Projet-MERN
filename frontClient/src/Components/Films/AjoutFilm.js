import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {addfilm} from "../../Redux/actions/filmsAction";

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
const AjoutFilm=()=>{


 const [nomfilm, setNomfilm] = useState("");
 const [trailerF, setTrailerF] = useState("");
 const [tempsF, setTempsF] = useState("");
 const [descriptionF, setDescriptionF] = useState("");
 const [prixF, setPrixF] = useState("");
 const [categorie, setCategorie] = useState("");
 const [files, setFiles] = useState("")

 const dispatch = useDispatch();
 const navigate = useNavigate();
 useEffect(() => {
 //dispatch(loadSpecialites());
 dispatch(loadCategories());
 //dispatch(loadAuteurs());
 },[dispatch]);

 const categories = useSelector((state) =>state.allcategories.categories);


 /*const specialites = useSelector((state)
=>state.allspecialites.specialites);
 const editeurs = useSelector((state) =>state.allediteurs.editeurs);
 const auteurs = useSelector((state) =>state.allauteurs.auteurs);
*/
 const handleSubmit = async(event)=> {
 event.preventDefault();
 const fil={
    nomfilm: nomfilm,
    trailerF:trailerF,
    tempsF:tempsF,
    descriptionF:descriptionF,
    prixF:prixF,
    categorie:categorie,
    imageF : files[0].file.name
 };
 dispatch(addfilm(fil));
 navigate("/films");
 }
 return (

 <div className="container">

 <form style={{ marginLeft: 8}}>
 <div>
 <Button variant="contained"
onClick={(event)=>handleSubmit(event)}>Ajout</Button>
 </div>
 <FormControl>
 <TextField
 variant="outlined"
label="NOMFILM"
value={nomfilm}
 onChange={e => setNomfilm(e.target.value)}
 required />


 <TextField
 variant="outlined"
label="trailer"
value={trailerF}
 onChange={e => setTrailerF(e.target.value)}
 required />


 <TextField
 variant="outlined"
label="tempsF"
value={tempsF}
 onChange={e => setTempsF(e.target.value)}
 />


 <TextField
 variant="outlined"
 type="text"
label="descriptionF"
value={descriptionF}
 onChange={e => setDescriptionF(e.target.value)}
 />


 <TextField
 variant="outlined"
 type="text"
label="prixF"
value={prixF}
 onChange={e => setPrixF(e.target.value)}
 />
 
 <TextField
 variant="outlined"
 select
 label="Categorie"
 value={categorie}
 helperText="Sélectionner une categorie"
 onChange={e => setCategorie(e.target.value)}
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
export default AjoutFilm 
