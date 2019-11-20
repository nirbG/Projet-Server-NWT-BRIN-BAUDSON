import { Observable } from 'rxjs';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { HerosEntity } from "./entities/heros.entity";
import { HerosDao } from "./dao/heros.dao";
export declare class HerosService {
    private readonly _herosDao;
    private _heros;
    constructor(_herosDao: HerosDao);
    findAll(): Observable<HerosEntity[] | void>;
    findSome(start: number, nb: number): Observable<HerosEntity[] | void>;
    findOne(id: string): Observable<HerosEntity>;
    create(body: CreateHeroDto): Observable<HerosEntity>;
    update(id: string, body: UpdateHeroDto): Observable<HerosEntity>;
    delete(_id: string): Observable<void>;
    private _addHeros;
    private _findHeroIndexOfList;
}
