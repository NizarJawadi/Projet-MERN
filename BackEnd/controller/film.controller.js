import mongoose from 'mongoose';
import Film from '../models/Film.model.js';
export const getFilms = async (req, res) => {
 try {
 const cat = await Film.find().populate('categorie')
;

 res.status(200).json(cat);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const getFilmByID = async (req, res) => {
 try {
 const fil = await Film.findById(req.params.id).populate('categorie');
 res.status(200).json(fil);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const createFilm = async (req, res) => {
 const { nomfilm, imageF,trailerF,tempsF,descriptionF,prixF,categorie} =req.body;

 const newFilm = new Film({
    nomfilm:nomfilm, imageF:imageF,trailerF:trailerF,tempsF:tempsF,descriptionF:descriptionF,prixF:prixF,categorie:categorie })
 try {
 await newFilm.save();
 res.status(201).json(newFilm );
 } catch (error) {
 res.status(409).json({ message: error.message });
 }
}
export const updateFilm= async (req, res) => {
 const { id } = req.params;
 const {
    nomfilm, imageF,trailerF,tempsF,descriptionF,prixF,categorie} =
req.body;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de Film avec un id: ${id}`);
 const fil1 = {
    nomfilm:nomfilm, imageF:imageF,trailerF:trailerF,tempsF:tempsF,descriptionF:descriptionF,prixF:prixF,categorie:categorie, _id: id
};
 await Film.findByIdAndUpdate(id, fil1);
 res.json(fil1);
}
export const deleteFilm = async (req, res) => {
 const { id } = req.params;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de Film avec l'ID: ${id}`);
 await Film.findByIdAndDelete(id);
 res.json({ message: "Film supprimé avec succès." });
} 
