import { Router, Request, Response } from 'express';
import { User } from '../Interface/user';
import { userList } from '../Users';

const Userrouter = Router();

const currentUsers = [];

// GET All users depending on query

Userrouter.get('/', (req: Request, res: Response) => {
    let users = userList;

    const { query, email, phoneNumber } = req.query;

    if (query) {
        users = users.filter(user =>
            user.firstName.includes(query as string) ||
            user.lastName.includes(query as string)
        );
    }

    if (email) {
        users = users.filter(user => user.email === email);
    }

    if (phoneNumber) {
        users = users.filter(user => user.phoneNumber === phoneNumber);
    }

    res.json(users);
});

// GET single user

Userrouter.get('/:id', (req: Request, res: Response) => {
    const user = userList.find(user => user._id === req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// CREATE single user

Userrouter.post('/', (req: Request, res: Response) => {
    const newUser: User = {
        ...req.body,
        _id: `${userList.length + 1 + "_id"}`,
    };
    userList.push(newUser);
    res.status(201).json(newUser);
});

// UPDATE single user

Userrouter.put('/:id', (req: Request, res: Response) => {
    const index = userList.findIndex(user => user._id === req.params.id);
    if (index !== -1) {
        userList[index] = { ...userList[index], ...req.body };
        res.json(userList[index]);
    } else {
        res.status(404).send('User not found');
    }
});

// DELETE single user

Userrouter.delete('/:id', (req: Request, res: Response) => {
    const index = userList.findIndex(user => user._id === req.params.id);
    if (index !== -1) {
        userList.splice(index, 1);
        res.json(true);
    } else {
        res.status(404).send('User not found');
    }
});

export default Userrouter;