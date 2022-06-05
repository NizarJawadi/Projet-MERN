import express from 'express';
const router = express.Router();
import { getFilms, getFilmByID, createFilm, updateFilm, deleteFilm } from '../controller/Film.controller.js';
import {auth} from "../middleware/auth.js";


/**
 * @route GET /api/Films
 * @desc Get All Films
 * @access Public
 */
 router.get('/',auth, getFilms); 
/**
 * @route POST /api/Films
 * @desc Ajouter un Film
 * @access Public
 */
router.post('/', createFilm);
/**
 * @route GET /api/Films/:id
 * @desc Renvoyer un Film
 * @access Public
 */
router.get('/:id', getFilmByID);
/**
 * @route PUT /api/Films/:id
 * @desc Modifier un Film
 * @access Public
 */
router.put('/:id', updateFilm);
/**
 * @route DELETE /api/Films/:id
 * @desc Supprimer un Film
 * @access Public
 */
router.delete('/:id', deleteFilm);
export default router; 