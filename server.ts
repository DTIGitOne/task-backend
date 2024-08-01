import express, {Router , Request, Response } from 'express';
import Userrouter from './Routers/UserRouter';
import cors from 'cors';

const server = express();
const port = 8000;

server.use(express.json());

server.use(cors());

server.use('/users', Userrouter);

server.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});