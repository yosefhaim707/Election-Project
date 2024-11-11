import { Request, Response } from "express";
import initVoteService from "../../services/voteService/initVoteService";
import { Schema } from "mongoose";




const postVote = async (req: Request, res: Response): Promise<void> => {
    const { username, candidateName } = req.query;
    console.log(username, candidateName, typeof username, typeof candidateName);
    console.log(req.query);
    
    
    
    try {
        if (!username || !candidateName) {
            throw new Error('Data is missing')
        };

        await initVoteService(username as string, candidateName as string);
        res.status(201).json('Vote has been cast');
    } catch (error) {
        res.status(400).json(error instanceof Error ? error.message : 'An error has occurred');
    }
};

export default postVote;