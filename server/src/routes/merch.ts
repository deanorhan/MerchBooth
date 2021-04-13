import express, { Request, Response } from "express";
import { IMerch } from '../models/types';
import Merch from "../models/merch";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  console.log("Getting merch");

  Merch.find()
    .then((merch) => res.json(merch))
    .catch((err: Error) => res.status(400).send(err));
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const body = req.body as Pick<IMerch, 'title' | 'price'>

        const newMerch: IMerch = new Merch({
            title: body.title,
            price: body.price
        });

        await newMerch.save();
        res.status(201).end();
    
    } catch(error) {
        res.status(400).send(error);
    }
});

router.get("/:id", (req: Request, res: Response) => {
  Merch.findById(req.params.id)
    .then((merch) => res.json(merch))
    .catch((err: Error) => res.status(404).send(err));

  res.status(404).send({ message: "Nothing here" });
});

export { router as merchRouter };
