import userDTO from "../DTO/userDTO";
import User, { IUser } from "../models/User";
import userCreator from "../utils/userCreator";


const userRegister = async (data: userDTO): Promise<IUser> => {
    try {
        if (!data) {
            throw new Error('Data is missing');
        }
        const user: IUser = userCreator(data)
        return await user.save();
        
    } catch (error) {
        throw error;
    }
};

export default userRegister;