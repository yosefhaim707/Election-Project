import { Schema } from "mongoose";
import voteDTO from "../../DTO/voteDTO";
import Candidate, { ICandidate } from "../../models/Candidate";
import User, { IUser } from "../../models/User";



const initVoteService = async (voteDTO: voteDTO): Promise<void> => {
    try {
        if (!voteDTO) {
            throw new Error('Data is missing');
        };
        
        const selectedUser: IUser | null = await User.findById(voteDTO.userId);
        const selectedCandidate: ICandidate | null = await Candidate.findById(voteDTO.candidateId);
        if (!selectedUser || !selectedCandidate) {
            throw new Error('User or candidate not found');
        };

        selectedCandidate.votes++;
        selectedUser.hasVoted = true;
        selectedUser.votedFor = selectedCandidate._id as Schema.Types.ObjectId;
        await selectedCandidate.save();
        await selectedUser.save();
        console.log(selectedCandidate, selectedUser);
        

    } catch (error) {
        throw (error instanceof Error ? error : new Error('An error has occurred'));
    }
};

export default initVoteService;