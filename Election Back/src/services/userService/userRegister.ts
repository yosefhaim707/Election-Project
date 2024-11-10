import userDTO from "../../DTO/userDTO";
import User, { IUser } from "../../models/User";
import userCreator from "../../utils/userCreator";


const userRegister = async (data: userDTO): Promise<IUser> => {
    try {
        if (!data) {
            throw new Error('Data is missing');
        }
        const user: IUser = userCreator(data)
        return await user.save();

    } catch (error) {
        throw (error instanceof Error ? error : new Error('An error has occurred'));
    }
};


export default userRegister;