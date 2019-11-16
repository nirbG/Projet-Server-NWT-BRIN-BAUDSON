import {HeroSimple} from "../../heros/interfaces/heroSimple.interfaces";
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {Type} from "class-transformer";


export class UpdateComicsDto {

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  isbn?: string;

  @IsOptional()
  @IsString()
  photo?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  //@IsOptional()
  //@IsInstance()
  //@ValidateNested()
  //@Type(() => )
  mainHeros?: HeroSimple;

  //@IsOptional()
  //@IsInstance()
  //@ValidateNested()
  //@Type(() => )
  otherHeros?: HeroSimple[];

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  price?: number;

  @IsOptional()
  @IsBoolean()
  wish?: boolean;

  @IsOptional()
  @IsBoolean()
  inBD?: boolean;

}
