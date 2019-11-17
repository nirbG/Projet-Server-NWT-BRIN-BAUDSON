import {HeroSimple} from "./heroSimple.interfaces";
import { Document } from 'mongoose';

export interface Hero extends Document{
  id: string;
  photo?: string;
  name: string;
  pouvoir: string;
  ennemi: HeroSimple[];
  allie: HeroSimple[];
  isHumain: boolean;
}
