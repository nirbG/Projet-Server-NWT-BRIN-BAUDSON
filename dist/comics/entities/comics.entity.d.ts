import { HeroSimple } from "../../heros/interfaces/heroSimple.interfaces";
export declare class ComicsEntity {
    isbn: string;
    photo?: string;
    title: string;
    mainHeros: HeroSimple;
    otherHeros: HeroSimple[];
    price: number;
    wish: boolean;
    inBD: boolean;
    constructor(partial: Partial<ComicsEntity>);
}
