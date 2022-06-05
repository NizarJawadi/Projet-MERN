import mongoose from "mongoose"
var categorieSchema = mongoose.Schema({
nomC: String,
typeC: String
})
const Categorie = mongoose.model('Categorie', categorieSchema);
export default Categorie