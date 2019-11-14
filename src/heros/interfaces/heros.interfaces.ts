import {HeroSimple} from "./heroSimple.interfaces";

export interface Hero {
  id: string;
  photo?: string;
  name: string;
  pouvoir: string;
  ennemi: HeroSimple[];
  allie: HeroSimple[];
  isHumain: boolean;
}
