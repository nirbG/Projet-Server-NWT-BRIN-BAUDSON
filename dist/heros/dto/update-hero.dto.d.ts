import { HeroSimple } from "../interfaces/heroSimple.interfaces";
export interface HeroUpdateDto {
    id?: string;
    photo?: string;
    name?: string;
    pouvoir: string;
    ennemi?: HeroSimple[];
    allie?: HeroSimple[];
    isHumain?: boolean;
}
