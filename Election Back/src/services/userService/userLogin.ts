import User, { IUser } from "../../models/User";

const userLogin = async (username: string, password: string): Promise<IUser> => {
    try {
        if (!username || !password) {
            throw new Error('Data is missing');
        }
        const user: IUser | null = await User.findOne({ username, password });
        if (!user) {
            throw new Error('Invalid details');
        }
        return user;
    } catch (error) {
        throw (error instanceof Error ? error : new Error('An error has occurred')); 
    }

};

export default userLogin;