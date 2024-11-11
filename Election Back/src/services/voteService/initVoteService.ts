import { Schema } from "mongoose";
import Candidate, { ICandidate } from "../../models/Candidate";
import User, { IUser } from "../../models/User";



const initVoteService = async (username: string, candidateName: string): Promise<void> => {
    try {
        if (!username || !candidateName) {
            throw new Error('Data is missing');
        };
        
        const selectedUser: IUser | null = await User.findOne({ username });
        const selectedCandidate: ICandidate | null = await Candidate.findOne({ name: candidateName });
        if (!selectedUser || !selectedCandidate) {
            throw new Error('User or candidate not found');
        };
        if (selectedUser.hasVoted) {
            console.log(selectedUser.votedFor, selectedCandidate._id);
            
            
            if ((selectedUser.votedFor as Schema.Types.ObjectId).toString() === (selectedCandidate._id as Schema.Types.ObjectId).toString()) {
                throw new Error('User has already voted for this candidate');
            } else {
                await Candidate.findByIdAndUpdate(selectedUser.votedFor, { $inc: { votes: -1} })
            };
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