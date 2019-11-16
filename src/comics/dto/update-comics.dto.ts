import {HeroSimple} from "../../heros/interfaces/heroSimple.interfaces";
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {Type} from "class-transformer";
import {ApiModelProperty} from "@nestjs/swagger";


export class UpdateComicsDto {

  @ApiModelProperty({ description: 'ISBN number', example: '978-2-3657-7335-5'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  isbn?: string;

  @ApiModelProperty({ description: 'Photo'})
  @IsOptional()
  @IsString()
  photo?: string;

  @ApiModelProperty({ description: 'Title', example: 'Batman: Of Bats and Rats'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @ApiModelProperty({ description: 'Main hero'})
  //@IsOptional()
  //@IsInstance()
  //@ValidateNested()
  //@Type(() => )
  mainHeros?: HeroSimple;

  @ApiModelProperty({ description: 'Supporting heroes or ennemies'})
  //@IsOptional()
  //@IsInstance()
  //@ValidateNested()
  //@Type(() => )
  otherHeros?: HeroSimple[];

  @ApiModelProperty({ description: 'Price', example: '12.50€'})
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  price?: number;

  @ApiModelProperty({ description: 'Wish'})
  @IsOptional()
  @IsBoolean()
  wish?: boolean;

  @ApiModelProperty({ description: 'Is it available in BD'})
  @IsOptional()
  @IsBoolean()
  inBD?: boolean;

}
