import { Observable } from 'rxjs';
import { CreateComicsDto } from './dto/create-comics.dto';
import { UpdateComicsDto } from './dto/update-comics.dto';
import { ComicsEntity } from "./entities/comics.entity";
import { ComicsDao } from "./dao/comics.dao";
export declare class ComicsService {
    private readonly _comicsDao;
    private _comics;
    constructor(_comicsDao: ComicsDao);
    findAll(): Observable<ComicsEntity[] | void>;
    findSome(start: number, nb: number): Observable<ComicsEntity[] | void>;
    findOne(_id: string): Observable<ComicsEntity>;
    create(body: CreateComicsDto): Observable<ComicsEntity>;
    update(_id: string, body: UpdateComicsDto): Observable<ComicsEntity>;
    delete(_id: string): Observable<void>;
    private _addComics;
    private _findComicsIndexOfList;
}
