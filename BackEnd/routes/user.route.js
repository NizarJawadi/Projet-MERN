import express from 'express';
import { createUser,getuserBYEmail,RefreshToken} from '../controller/user.controller.js'; 
const router = express.Router();
router.post('/refreshToken/',RefreshToken);
router.post('/', createUser);
router.post('/login', getuserBYEmail);
export default router;