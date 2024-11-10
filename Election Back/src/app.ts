import { connect } from "mongoose";
import { connectToDB } from "./dal/database";
import dotenv from 'dotenv';
import express from 'express';
import User, { IUser } from "./models/User";
import userRegister from "./services/userService";
import userRouter from "./routes/userRoute";

dotenv.config();

const app = express()
const PORT = process.env.PORT ;



// Converts all data to json format
app.use(express.json());
// Connects to Mongo
connectToDB();

app.use('/users', userRouter);






app.listen(PORT, () => {
    try {
        console.log('Server listening to port ' + PORT);
    } catch (error) {
        console.log('Failed to listen to port ' + PORT);
    }
});

