import  { Router } from "express";
import getCandidates from "../controllers/candidateController/getCandidates";



const router = Router();

router.get('/', getCandidates);

export default router;