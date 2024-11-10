import  { Router } from "express";
import postUser from "../controllers/userController/postUser";
import loginUser from "../controllers/userController/loginUser";


const router = Router();

router.post('/register', postUser);
router.post('/login', loginUser);

export default router;