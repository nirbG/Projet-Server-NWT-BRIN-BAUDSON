import { HeroSimpleDto } from "../../heros/dto/hero-simple.dto";
export declare class ComicsEntity {
    isbn: string;
    photo?: string;
    title: string;
    mainHeros: HeroSimpleDto;
    otherHeros: HeroSimpleDto[];
    price: number;
    wish: boolean;
    inBD: boolean;
    constructor(partial: Partial<ComicsEntity>);
}
