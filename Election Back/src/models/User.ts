import mongoose, { Document, Schema, Types } from "mongoose";


export interface IUser extends Document {
    username: string;
    password: string;
    isAdmin: boolean;
    hasVoted: boolean;
    votedFor?: Schema.Types.ObjectId | null;
};

const UserSchema: Schema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    hasVoted: { type: Boolean, required: true },
    votedFor: { type: Schema.Types.ObjectId, ref: 'Candidate', required: false, default: null }
});

export default mongoose.model<IUser>('User', UserSchema);