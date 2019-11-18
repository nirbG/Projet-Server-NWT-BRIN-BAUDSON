import { HeroSimpleDto } from "./hero-simple.dto";
export declare class UpdateHeroDto {
    id?: string;
    photo?: string;
    name?: string;
    pouvoir: string;
    ennemi?: HeroSimpleDto[];
    allie?: HeroSimpleDto[];
    isHumain?: boolean;
}
