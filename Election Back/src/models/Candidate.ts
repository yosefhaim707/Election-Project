import mongoose, { Document, Schema } from "mongoose";


export interface ICandidate extends Document {
    name: string;
    image: string;
    votes: number;
};

const CandidateSchema: Schema<ICandidate> = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    votes: { type: Number, required: true }
});

export default mongoose.model<ICandidate>('Candidate', CandidateSchema);