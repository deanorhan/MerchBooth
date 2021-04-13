import express from 'express';
import { merchRouter } from '../routes/merch'

export default function registerRoutes(app: express.Application) {
    app.use('/merch', merchRouter);
}