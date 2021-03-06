import {IsNotEmpty, IsString} from "class-validator";
import {ApiModelProperty} from "@nestjs/swagger";

export class HeroSimpleDto {

    @ApiModelProperty({ description: 'ID', example: '85'})
    @IsString()
    @IsNotEmpty()
    _id: string;

    @ApiModelProperty({ description: 'Photo', example: 'default.jpg'})
    @IsString()
    @IsNotEmpty()
    photo?: string;

    @ApiModelProperty({ description: 'Name', example: 'Superboy'})
    @IsString()
    @IsNotEmpty()
    name: string;

}
