import { Document } from 'mongoose'

export interface IMerch extends Document {
    title: string
    price: number
}