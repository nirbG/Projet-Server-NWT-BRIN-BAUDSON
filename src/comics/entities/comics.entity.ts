import {HeroSimple} from "../../heros/interfaces/heroSimple.interfaces";
import {Exclude, Expose, Type} from "class-transformer";



@Exclude()
export class ComicsEntity{

    @Expose()
    @Type(() => String)
    isbn: string;

    @Expose()
    @Type(() => String)
    photo?: string;

    @Expose()
    @Type(() => String)
    title: string;

    @Expose()
    //@Type(() => )
    mainHeros: HeroSimple;

    @Expose()
    //@Type(() => )
    otherHeros: HeroSimple[];

    @Expose()
    @Type(() => Number)
    price: number;

    @Expose()
    @Type(() => Boolean)
    wish: boolean;

    @Expose()
    @Type(() => Boolean)
    inBD: boolean;

    constructor(partial: Partial<ComicsEntity>) {
        Object.assign(this, partial);
    }
}
