import {HeroSimple} from "../../heros/interfaces/heroSimple.interfaces";
import {Exclude, Expose, Type} from "class-transformer";
import {ApiModelProperty} from "@nestjs/swagger";



@Exclude()
export class ComicsEntity{

    @ApiModelProperty({ description: 'ISBN number', example: '1082365773'})
    @Expose()
    @Type(() => String)
    isbn: string;

    @ApiModelProperty({ description: 'Photo', example: '1082365773.jpg'})
    @Expose()
    @Type(() => String)
    photo?: string;

    @ApiModelProperty({ description: 'Title', example: 'Batman: Of Bats and Rats'})
    @Expose()
    @Type(() => String)
    title: string;

    @ApiModelProperty({ description: 'Main hero'})
    @Expose()
    //@Type(() => )
    mainHeros: HeroSimple;

    @ApiModelProperty({ description: 'Supporting heroes or ennemies'})
    @Expose()
    //@Type(() => )
    otherHeros: HeroSimple[];

    @ApiModelProperty({ description: 'Price', example: 12.50})
    @Expose()
    @Type(() => Number)
    price: number;

    @ApiModelProperty({ description: 'Wish', example: false})
    @Expose()
    @Type(() => Boolean)
    wish: boolean;

    @ApiModelProperty({ description: 'Is it available in BD', example: true})
    @Expose()
    @Type(() => Boolean)
    inBD: boolean;

    constructor(partial: Partial<ComicsEntity>) {
        Object.assign(this, partial);
    }
}
