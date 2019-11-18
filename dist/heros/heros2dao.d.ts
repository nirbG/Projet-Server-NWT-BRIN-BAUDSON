import { Model } from "mongoose";
import { Hero } from "./interfaces/heros.interfaces";
export declare class Heros2dao {
    private readonly _hero2Model;
    constructor(_hero2Model: Model<Hero>);
}
