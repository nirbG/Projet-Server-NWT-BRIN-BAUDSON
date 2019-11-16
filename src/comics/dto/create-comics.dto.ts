import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateComicsDto {

  @IsString()
  @IsNotEmpty()
  isbn?: string;

  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsNumber()
  @IsNotEmpty()
  price?: number;
}
