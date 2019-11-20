import { HeroSimpleDto } from "../../heros/dto/hero-simple.dto";
export declare class ComicsEntity {
    _id?: string;
    photo?: string;
    title: string;
    mainHeros: HeroSimpleDto;
    otherHeros: HeroSimpleDto[];
    price: number;
    wish: boolean;
    inBD: boolean;
    constructor(partial: Partial<ComicsEntity>);
}
