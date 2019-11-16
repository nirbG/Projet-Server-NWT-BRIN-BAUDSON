import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import {ApiModelProperty} from "@nestjs/swagger";

export class CreateComicsDto {

  @ApiModelProperty({ description: 'ISBN number', example: '978-2-3657-7335-5'})
  @IsString()
  @IsNotEmpty()
  isbn?: string;

  @ApiModelProperty({ description: 'Title', example: 'Batman: Of Bats and Rats'})
  @IsString()
  @IsNotEmpty()
  title?: string;

  @ApiModelProperty({ description: 'Price', example: '12.50€'})
  @IsNumber()
  @IsNotEmpty()
  price?: number;
}
