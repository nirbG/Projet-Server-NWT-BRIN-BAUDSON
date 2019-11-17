
import {HeroSimple} from "../interfaces/heroSimple.interfaces";
import {IsBoolean, IsInstance, IsNotEmpty, IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {ApiModelProperty} from "@nestjs/swagger";

export class UpdateHeroDto {

  @ApiModelProperty({ description: 'ID', example: '85'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  id?: string;

  @ApiModelProperty({ description: 'Photo', example: 'Superboy.jpg'})
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

  @ApiModelProperty({ description: "Hero's nemesis"})
  @IsOptional()
  //@IsInstance()
  //@ValidateNested()
  //@Type(() => )
  ennemi?: HeroSimple[];

  @ApiModelProperty({ description: "Hero's allies"})
  @IsOptional()
  //@IsInstance()
  //@ValidateNested()
  //@Type(() => )
  allie?: HeroSimple[];

  @ApiModelProperty({ description: 'Is the Hero human ?', example: true})
  @IsOptional()
  @IsBoolean()
  @IsNotEmpty()
  isHumain?: boolean;
}
