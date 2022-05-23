import { connect } from 'getstream';
import {Request, Response} from "express";
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat').StreamChat;
const crypto = require('crypto');

require('dotenv').config();

const api_key = process.env.STREAM_API_KEY
const api_secret = process.env.STREAM_API_SECRET
const app_id = process.env.STREAM_APP_ID

export const signup = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        console.log(username)
        const userId = crypto.randomBytes(16).toString('hex');

        const serverClient = connect('8395ppc483r3', 'p59x3ba5rjzcm55f5b66khh56sy7ruwew82jsxsp45vk4mhczzpa4vd78fkcr6mr', '1188171');

        const hashedPassword = await bcrypt.hash(password, 10);

        const token = serverClient.createUserToken(userId);

        res.status(200).json({ token, username, userId, hashedPassword});
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const serverClient = connect('8395ppc483r3', 'p59x3ba5rjzcm55f5b66khh56sy7ruwew82jsxsp45vk4mhczzpa4vd78fkcr6mr', '1188171');
        const client = StreamChat.getInstance(api_key, api_secret);

        const { users } = await client.queryUsers({ name: username });

        if(!users.length) return res.status(400).json({ message: 'User not found' });

        const success = await bcrypt.compare(password, users[0].hashedPassword);

        const token = serverClient.createUserToken(users[0].id);

        if(success) {
            res.status(200).json({ token, fullName: users[0].fullName, username, userId: users[0].id});
        } else {
            res.status(500).json({ message: 'Incorrect password' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
