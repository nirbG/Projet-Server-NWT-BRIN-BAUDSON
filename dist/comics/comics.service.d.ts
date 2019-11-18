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
    findSome(s: string, e: string): Observable<ComicsEntity[] | void>;
    findOne(isbn: string): Observable<ComicsEntity>;
    create(body: CreateComicsDto): Observable<ComicsEntity>;
    update(isbn: string, body: UpdateComicsDto): Observable<ComicsEntity>;
    delete(isbn: string): Observable<void>;
    private _addComics;
    private _findComicsIndexOfList;
}
