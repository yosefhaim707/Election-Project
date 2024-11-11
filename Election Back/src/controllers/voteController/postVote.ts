import { Request, Response } from "express";
import voteDTO from "../../DTO/voteDTO";
import initVoteService from "../../services/voteService/initVoteService";
import { Schema } from "mongoose";




const postVote = async (req: Request, res: Response): Promise<void> => {
    
    try {
        const voteDTO: voteDTO | null = req.body;
        if (!voteDTO) {
            throw new Error('Data is missing')
        };
        if (typeof voteDTO.candidateId != typeof Schema.Types.ObjectId || typeof voteDTO.userId != typeof Schema.Types.ObjectId) {
            throw new Error('Invalid data');
        }

        await initVoteService(voteDTO);
    } catch (error) {
        throw (error  instanceof Error ? error.message : 'An error has occurred');
    }
};

export default postVote;