import { Request, Response } from "express";
import { IUser } from "../../models/User";
import userLogin from "../../services/userService/userLogin";


const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;
        const token: string = await userLogin(username, password);
        console.log(token);
        res.status(200).json({token: token});
    } catch (error) {
        res.status(400).json(error instanceof Error ? error.message : 'An error has occurred');
    };
};

export default loginUser;
