import Axios from "../Axios/Api";
const CATEGORIE_API="/CATEGORIES"
 const fetchCategories=async()=> {
 return await Axios.get(CATEGORIE_API);
 }

 export const CategorieService = {
    fetchCategories
 } 
