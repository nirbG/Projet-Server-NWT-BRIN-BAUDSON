import { Hero } from './interfaces/heros.interfaces';
import { Observable } from 'rxjs';
import { HeroCreateDto } from './dto/create-hero.dto';
import { HeroUpdateDto } from './dto/update-hero.dto';
export declare class HerosService {
    private _heros;
    constructor();
    findAll(): Observable<Hero[] | void>;
    findSome(start: string, end: string): Observable<Hero[] | void>;
    findOne(id: string): Observable<Hero>;
    create(body: HeroCreateDto): Observable<Hero>;
    update(id: string, body: HeroUpdateDto): Observable<Hero>;
    delete(id: string): Observable<void>;
    private _addComics;
    private _findHeroIndexOfList;
}
