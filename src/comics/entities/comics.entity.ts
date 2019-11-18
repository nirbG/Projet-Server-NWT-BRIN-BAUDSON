import {HeroSimple} from "../../heros/interfaces/heroSimple.interfaces";
import {Exclude, Expose, Type} from "class-transformer";
import {ApiModelProperty} from "@nestjs/swagger";
import {HeroSimpleDto} from "../../heros/dto/hero-simple.dto";
import {IsInstance, IsNotEmpty, IsString} from "class-validator";



@Exclude()
export class ComicsEntity{

    @ApiModelProperty({ description: 'ISBN number', example: '85'})
    @Expose()
    @IsString()
    @IsNotEmpty()
    _id?: string;

    @ApiModelProperty({ description: 'Photo', example: '1082365773.jpg'})
    @Expose()
    @Type(() => String)
    photo?: string;

    @ApiModelProperty({ description: 'Title', example: 'Batman: Of Bats and Rats'})
    @Expose()
    @Type(() => String)
    title: string;

    @ApiModelProperty({ description: 'Main hero',  example: {
        id: '3',
        photo: 'batman.jpg',
        name: 'Batman',
    }})
    @Expose()
    @IsInstance(HeroSimpleDto)
    @Type(() => HeroSimpleDto)
    mainHeros: HeroSimpleDto;

    @ApiModelProperty({ description: 'Supporting heroes or ennemies',  example: [{
        "id": "85",
        "photo": "superboy.jpg",
        "name": "Superboy"
    }
    ,{
        "id": "5",
        "photo": "joker.jpg",
        "name": "Joker"}]})
    @Expose()
    @IsInstance(HeroSimpleDto,{each:true})
    @Type(() => HeroSimpleDto)
    otherHeros: HeroSimpleDto[];

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
