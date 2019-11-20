import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import {ApiModelProperty} from "@nestjs/swagger";

export class CreateComicsDto {

  @ApiModelProperty({ description: 'ISBN number', example: '2365773545'})
  @IsString()
  @IsNotEmpty()
  _id?: string;

  @ApiModelProperty({ description: 'Photo', example: 'default.jpg'})
  @IsString()
  @IsNotEmpty()
  photo?: string;

  @ApiModelProperty({ description: 'Title', example: 'Batman: Of Bats and Rats'})
  @IsString()
  @IsNotEmpty()
  title?: string;

  @ApiModelProperty({ description: 'Price', example: 12.50})
  @IsNumber()
  @IsNotEmpty()
  price?: number;
}
