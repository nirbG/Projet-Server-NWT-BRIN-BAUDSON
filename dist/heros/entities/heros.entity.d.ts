import { HeroSimpleDto } from "../dto/hero-simple.dto";
export declare class HerosEntity {
    id: string;
    photo?: string;
    name: string;
    pouvoir: string;
    ennemi: HeroSimpleDto[];
    allie: HeroSimpleDto[];
    isHumain: boolean;
    constructor(partial: Partial<HerosEntity>);
}
