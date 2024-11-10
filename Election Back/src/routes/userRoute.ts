import e, { Router } from "express";
import postUser, { loginUser } from "../controllers/userController";


const router = Router();

router.post('/register', postUser);
router.post('/login', loginUser);

export default router;