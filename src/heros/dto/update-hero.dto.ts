
import {HeroSimple} from "../interfaces/heroSimple.interfaces";
import {IsBoolean, IsInstance, IsNotEmpty, IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";

export class HeroUpdateDto {

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  id?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  photo?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsString()
  pouvoir: string;

  //@IsOptional()
  //@IsInstance()
  //@ValidateNested()
  //@Type(() => )
  ennemi?: HeroSimple[];

  //@IsOptional()
  //@IsInstance()
  //@ValidateNested()
  //@Type(() => )
  allie?: HeroSimple[];

  @IsOptional()
  @IsBoolean()
  @IsNotEmpty()
  isHumain?: boolean;
}
