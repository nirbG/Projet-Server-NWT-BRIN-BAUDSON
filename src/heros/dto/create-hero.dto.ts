import {IsBoolean, IsNotEmpty, IsString} from "class-validator";

export class HeroCreateDto {


  @IsString()
  @IsNotEmpty()
  id?: string;

  @IsString()
  @IsNotEmpty()
  photo?: string;

  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  pouvoir: string;

  @IsBoolean()
  @IsNotEmpty()
  isHumain: boolean;

}
