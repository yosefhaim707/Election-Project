import { Router } from "express";
import postVote from "../controllers/voteController/postVote";



const router = Router();

router.put('/init', postVote);

export default router;