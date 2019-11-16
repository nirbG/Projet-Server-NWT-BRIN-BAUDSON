import {Exclude, Expose, Type} from "class-transformer";
import {HeroSimple} from "../interfaces/heroSimple.interfaces";

@Exclude()
export class HerosEntity{

    @Expose()
    @Type(() => String)
    id: string;

    @Expose()
    @Type(() => String)
    photo?: string;

    @Expose()
    @Type(() => String)
    name: string;

    @Expose()
    @Type(() => String)
    pouvoir: string;

    @Expose()
    //@Type(() => )
    ennemi: HeroSimple[];

    @Expose()
    //@Type(() => )
    allie: HeroSimple[];

    @Expose()
    @Type(() => Boolean)
    isHumain: boolean;

    constructor(partial: Partial<HerosEntity>) {
        Object.assign(this, partial);
    }
}
