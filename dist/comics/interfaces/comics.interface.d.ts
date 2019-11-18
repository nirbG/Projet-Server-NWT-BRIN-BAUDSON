import { HeroSimple } from "../../heros/interfaces/heroSimple.interfaces";
import { Document } from 'mongoose';
export interface Comics extends Document {
    isbn: string;
    photo?: string;
    title: string;
    mainHeros: HeroSimple;
    otherHeros: HeroSimple[];
    price: number;
    wish: boolean;
    inBD: boolean;
}
