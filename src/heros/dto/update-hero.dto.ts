
import {IsBoolean, IsInstance, IsNotEmpty, IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {ApiModelProperty} from "@nestjs/swagger";
import {HeroSimpleDto} from "./hero-simple.dto";

export class UpdateHeroDto {

  @ApiModelProperty({ description: 'ID', example: '85'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  _id?: string;

  @ApiModelProperty({ description: 'Photo', example: 'default.jpg'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  photo?: string;

  @ApiModelProperty({ description: 'Name', example: 'Superboy'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiModelProperty({ description: 'Main Power', example: 'Rapide'})
  @IsOptional()
  @IsString()
  pouvoir: string;

  @ApiModelProperty({ description: "Hero's ennemies",  example: [{
      _id: "5",
      photo: "joker.jpg",
      name: "Joker"}]})
  @IsOptional()
  @IsInstance(HeroSimpleDto,{each:true})
  @Type(() => HeroSimpleDto)
  @ValidateNested({each: true})
  ennemi?: HeroSimpleDto[];

  @ApiModelProperty({ description: "Hero's allies",  example: [{
      _id: '3',
      photo: 'batman.jpg',
      name: 'Batman',
    }]})
  @IsOptional()
  @IsInstance(HeroSimpleDto,{each:true})
  @Type(() => HeroSimpleDto)
  @ValidateNested({each: true})
  allie?: HeroSimpleDto[];

  @ApiModelProperty({ description: 'Is the Hero human ?', example: true})
  @IsOptional()
  @IsBoolean()
  @IsNotEmpty()
  isHumain?: boolean;
}
