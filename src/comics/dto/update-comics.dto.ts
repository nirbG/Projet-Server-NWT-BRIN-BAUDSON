import {HeroSimple} from "../../heros/interfaces/heroSimple.interfaces";
import {IsBoolean, IsInstance, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {ApiModelProperty} from "@nestjs/swagger";
import {HeroSimpleDto} from "../../heros/dto/hero-simple.dto";


export class UpdateComicsDto {

  @ApiModelProperty({ description: 'ISBN number', example: '1082365773'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  isbn?: string;

  @ApiModelProperty({ description: 'Photo', example: '1082365773.jpg'})
  @IsOptional()
  @IsString()
  photo?: string;

  @ApiModelProperty({ description: 'Title', example: 'Batman: Of Bats and Rats'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @ApiModelProperty({ description: 'Main hero',  example: {
      id: '3',
      photo: 'batman.jpg',
      name: 'Batman',
    }})
  @IsOptional()
  @IsInstance(HeroSimpleDto)
  @Type(() => HeroSimpleDto)
  @ValidateNested()
  mainHeros?: HeroSimpleDto;

  @ApiModelProperty({ description: 'Supporting heroes or ennemies',  example: [{
      "id": "85",
      "photo": "superboy.jpg",
      "name": "Superboy"
    }
    ,{
      "id": "5",
      "photo": "joker.jpg",
      "name": "Joker"}]})
  @IsOptional()
  @IsInstance(HeroSimpleDto,{each:true})
  @Type(() => HeroSimpleDto)
  @ValidateNested({each: true})
  otherHeros?: HeroSimpleDto[];

  @ApiModelProperty({ description: 'Price', example: 12.50})
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  price?: number;

  @ApiModelProperty({ description: 'Wish', example: false})
  @IsOptional()
  @IsBoolean()
  wish?: boolean;

  @ApiModelProperty({ description: 'Is it available in BD', example: true})
  @IsOptional()
  @IsBoolean()
  inBD?: boolean;

}
