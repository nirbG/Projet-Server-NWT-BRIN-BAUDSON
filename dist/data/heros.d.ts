import { HeroSimple } from "../heros/interfaces/heroSimple.interfaces";
export declare const HEROS: ({
    id: string;
    photo: string;
    name: string;
    pouvoir: string;
    ennemi: {
        id: string;
        photo: string;
        name: string;
    }[];
    allie: {
        id: string;
        photo: string;
        name: string;
    }[];
    isHumain: boolean;
} | {
    id: string;
    photo: string;
    name: string;
    pouvoir: string;
    ennemi: HeroSimple[];
    allie: HeroSimple[];
    isHumain: boolean;
} | {
    id: string;
    photo: string;
    name: string;
    pouvoir: string;
    ennemi: HeroSimple[];
    allie: {
        id: string;
        photo: string;
        name: string;
    }[];
    isHumain: boolean;
} | {
    id: string;
    photo: string;
    name: string;
    pouvoir: string;
    ennemi: {
        id: string;
        photo: string;
        name: string;
    }[];
    allie: HeroSimple[];
    isHumain: boolean;
})[];
