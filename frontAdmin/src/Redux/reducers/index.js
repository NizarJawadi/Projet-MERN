import { combineReducers } from "redux";
import filmsReducers from "./filmsReducer";
import categoriesReducers from "./categoriesReducer"; 
const rootReducer= combineReducers({
 allfilms:filmsReducers,
 allcategories:categoriesReducers,
});
export default rootReducer 
