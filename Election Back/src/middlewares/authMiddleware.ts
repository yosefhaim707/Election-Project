import { NextFunction, Request, Response } from "express";
import adminVerify from "../utils/adminVerify";



const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token: string | undefined = req.headers.authorization;
        if (!token) {
            throw new Error('No token provided');
        }
        const isValid: boolean = adminVerify(token);
        if (!isValid) {
            throw new Error('Unauthorized');
        }
        next();
    } catch (error) {
        res.status(401).json(error instanceof Error ? error.message : 'An error has occurred');
    }
};

export default authMiddleware;