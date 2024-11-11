import  { Router } from "express";
import getCandidates from "../controllers/candidateController/getCandidates";
import authMiddleware from "../middlewares/authMiddleware";



const router = Router();

router.get('/', authMiddleware, getCandidates);

export default router;