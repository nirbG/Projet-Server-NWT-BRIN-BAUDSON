import { HeroSimple } from "../heros/interfaces/heroSimple.interfaces";
export declare const COMICS: {
    isbn: string;
    photo: string;
    title: string;
    mainHeros: {
        id: string;
        photo: string;
        name: string;
    };
    otherHeros: HeroSimple[];
    price: number;
    wish: boolean;
    inBD: boolean;
}[];
