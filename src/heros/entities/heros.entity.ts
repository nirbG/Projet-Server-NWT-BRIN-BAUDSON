import {Exclude, Expose, Type} from "class-transformer";
import {HeroSimple} from "../interfaces/heroSimple.interfaces";
import {ApiModelProperty} from "@nestjs/swagger";

@Exclude()
export class HerosEntity{

    @ApiModelProperty({ description: 'ID', example: '85'})
    @Expose()
    @Type(() => String)
    id: string;

    @ApiModelProperty({ description: 'Photo', example: 'Superboy.jpg'})
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

    @ApiModelProperty({ description: "Hero's nemesis"})
    @Expose()
    //@Type(() => )
    ennemi: HeroSimple[];

    @ApiModelProperty({ description: "Hero's allies"})
    @Expose()
    //@Type(() => )
    allie: HeroSimple[];

    @ApiModelProperty({ description: 'Is the Hero human ?', example: true})
    @Expose()
    @Type(() => Boolean)
    isHumain: boolean;

    constructor(partial: Partial<HerosEntity>) {
        Object.assign(this, partial);
    }
}
