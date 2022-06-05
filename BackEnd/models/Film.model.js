import mongoose from "mongoose"
var filmSchema = mongoose.Schema({
 
    nomfilm:{type: String, required: true},
    imageF: String,
    trailerF: String ,
    tempsF: String , 
    descriptionF: String ,
    prixF:Number, 
 categorie: [{
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Categorie'
 }]

})
const Film = mongoose.model('Film', filmSchema);
export default Film 
