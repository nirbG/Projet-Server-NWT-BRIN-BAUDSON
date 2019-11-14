export interface Hero {
  id: number;
  photo: string;
  name: string;
  ennemi: Hero[];
  allie: Hero[];
  isHumain: boolean;
}
