import Candidate, { ICandidate } from "../../models/Candidate";



const candidateAll = async (): Promise<ICandidate[]> => {
    try {
        const candidates: ICandidate[] = await Candidate.find();
        if (!candidates) {
            throw new Error('No candidates found');
        }
        return candidates;
    } catch (error) {
        throw (error instanceof Error ? error : new Error('An error has occurred'));
    }
};

export default candidateAll;