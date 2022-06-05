import express from 'express';
const router = express.Router();
import { getCategories, getCategorieByID, createCategorie, updateCategorie,
deleteCategorie } from '../controller/categorie.controller.js';
/**
* @route GET /api/categories
* @desc Get All categories
* @access Public
*/
router.get('/', getCategories);
/**
* @route POST /api/Categories
* @desc Ajouter un Categorie
* @access Public
*/
router.post('/', createCategorie);
/**
* @route GET /api/Categories/:id
* @desc Renvoyer un Categorie
* @access Public
*/
router.get('/:id', getCategorieByID);
/**
* @route PUT /api/Categories/:id
* @desc Modifier un Categorie
* @access Public
*/
router.put('/:id', updateCategorie);
/**
* @route DELETE /api/Categories/:id
* @desc Supprimer un Categorie
* @access Public
*/
router.delete('/:id', deleteCategorie);
export default router;