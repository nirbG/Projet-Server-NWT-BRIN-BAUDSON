import { Observable } from 'rxjs';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { HerosEntity } from "./entities/heros.entity";
export declare class HerosService {
    private _heros;
    constructor();
    findAll(): Observable<HerosEntity[] | void>;
    findSome(start: string, end: string): Observable<HerosEntity[] | void>;
    findOne(id: string): Observable<HerosEntity>;
    create(body: CreateHeroDto): Observable<HerosEntity>;
    update(id: string, body: UpdateHeroDto): Observable<HerosEntity>;
    delete(id: string): Observable<void>;
    private _addComics;
    private _findHeroIndexOfList;
}
