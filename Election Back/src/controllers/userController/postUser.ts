import e, { Request, Response } from "express"
import userDTO from "../../DTO/userDTO"
import { IUser } from "../../models/User";
import userRegister from "../../services/userService/userRegister";


const postUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const data: userDTO = req.body;
        const user: IUser = await userRegister(data);
        console.log(user);

        if (!user) {
            throw new Error('User not created');
        };

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json(error instanceof Error ? error.message : 'An error has occurred');
    }
};




export default postUser;