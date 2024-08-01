import express, {Router , Request, Response } from 'express';
import Userrouter from './Routers/UserRouter';

const server = express();
const port = 3000;

server.use(express.json());

server.use('/users', Userrouter);

server.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});