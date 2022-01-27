import cors from 'cors';
import express from 'express';
// import { Server } from 'socket.io';

import { PORT } from './constants/env.constants';
// import { ioFunc } from './helpers/socket.helper';
import authRouter from './routes/auth.router';
import blockRouter from './routes/block.router';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/blocks', blockRouter);

app.use((err, req, res, next) => {
    res.status(err.status).json(err.message);
});

const connection = app.listen(PORT, () => {
    console.log(`App listen ${ PORT }`);
});

// export const io = new Server(connection, {
//     cors: {
//         origin: LOCALHOST,
//         methods: ['GET', 'POST', 'PUT', 'DELETE']
//     }
// });

// ioFunc(io);