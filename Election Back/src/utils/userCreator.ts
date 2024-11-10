import userDTO from "../DTO/userDTO";
import User, { IUser } from "../models/User";


const userCreator = (user: userDTO): IUser => {
    return new User({
        username: user.username,
        password: user.password,
        isAdmin: user.isAdmin,
        hasVoted: false,
        votedFor: null
    });
};

export default userCreator;