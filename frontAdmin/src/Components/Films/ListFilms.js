import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {loadFilms} from "../../Redux/actions/filmsAction";
import AfficheFilms from "./AfficheFilms";
const ListFilms=()=>{

 const dispatch = useDispatch();

 useEffect(() => {
 dispatch(loadFilms());
 });


 return(

 <div><AfficheFilms/></div>
 )
}
export default ListFilms 