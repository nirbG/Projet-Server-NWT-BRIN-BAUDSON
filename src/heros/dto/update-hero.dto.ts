import { Hero } from '../interfaces/heros.interfaces';

export interface HeroUpdateDto {
  id?: number;
  photo?: string;
  name?: string;
  ennemi?: Hero[];
  allie?: Hero[];
  isHumain?: boolean;
}
