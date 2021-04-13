import express from 'express';
import cors from 'cors';
import registerRoutes from './routes';
import { notFoundHandler } from '../middleware/not-found.middleware';

export default class Server {

    private app: express.Application;

    constructor() {
        this.app = express();

        this.setup();
    }

    public start() {
        this.app.listen(process.env.PORT || 3000, () => {
            console.log('We have begun');
        });
    }

    private setup() {
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());

        registerRoutes(this.app);

        this.app.use(notFoundHandler);
    }
}