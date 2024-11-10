import e, { Request, Response } from "express";
import { ICandidate } from "../../models/Candidate";
import candidateAll from "../../services/candidateService/candidateAll";



const getCandidates = async (req: Request, res: Response) => {
    try {
        const candidates: ICandidate[] = await candidateAll();
        if (!candidates) {
            throw new Error('No candidates found');
        }
        res.status(200).json(candidates);
    } catch (error) {
        res.status(400).json(error instanceof Error ? error.message : 'An error has occurred');
    }
};

export default getCandidates;