import User, { IUser } from "../../models/User";
import tokenGenerator from "../../utils/tokenGenerator";

const userLogin = async (username: string, password: string): Promise<string> => {
    try {
        if (!username || !password) {
            throw new Error('Data is missing');
        }
        const user: IUser | null = await User.findOne({ username, password });
        if (!user) {
            throw new Error('Invalid details');
        }

        const token: string = tokenGenerator(user);
        return token;
    } catch (error) {
        throw (error instanceof Error ? error : new Error('An error has occurred')); 
    }

};

export default userLogin;