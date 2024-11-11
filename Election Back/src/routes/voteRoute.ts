import { Router } from "express";
import postVote from "../controllers/voteController/postVote";
import loginMiddleware from "../middlewares/loginMiddleware";



const router = Router();

router.put('/init', loginMiddleware, postVote);

export default router;