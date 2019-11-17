import {Exclude, Expose, Type} from "class-transformer";
import {HeroSimple} from "../interfaces/heroSimple.interfaces";
import {ApiModelProperty} from "@nestjs/swagger";
import {HeroSimpleDto} from "../dto/hero-simple.dto";
import {IsInstance} from "class-validator";

@Exclude()
export class HerosEntity{

    @ApiModelProperty({ description: 'ID', example: '85'})
    @Expose()
    @Type(() => String)
    id: string;

    @ApiModelProperty({ description: 'Photo', example: 'superboy.jpg'})
    @Expose()
    @Type(() => String)
    photo?: string;

    @ApiModelProperty({ description: 'Name', example: 'Superboy'})
    @Expose()
    @Type(() => String)
    name: string;

    @ApiModelProperty({ description: 'Main Power', example: 'Rapide'})
    @Expose()
    @Type(() => String)
    pouvoir: string;

    @ApiModelProperty({ description: "Hero's ennemies",  example: [{
            "id": "5",
            "photo": "joker.jpg",
            "name": "Joker"}]})
    @Expose()
    @IsInstance(HeroSimpleDto,{each:true})
    @Type(() => HeroSimpleDto)
    ennemi: HeroSimpleDto[];

    @ApiModelProperty({ description: "Hero's allies",  example: [{
            id: '3',
            photo: 'batman.jpg',
            name: 'Batman',
        }]})
    @Expose()
    @IsInstance(HeroSimpleDto,{each:true})
    @Type(() => HeroSimpleDto)
    allie: HeroSimpleDto[];

    @ApiModelProperty({ description: 'Is the Hero human ?', example: true})
    @Expose()
    @Type(() => Boolean)
    isHumain: boolean;

    constructor(partial: Partial<HerosEntity>) {
        Object.assign(this, partial);
    }
}
