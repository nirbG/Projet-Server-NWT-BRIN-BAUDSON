import { Comics } from './interfaces/comics.interface';
import { Observable } from 'rxjs';
import { CreateComicsDto } from './dto/create-comics.dto';
import { UpdateComicsDto } from './dto/update-comics.dto';
export declare class ComicsService {
    private _comics;
    constructor();
    findAll(): Observable<Comics[] | void>;
    findSome(s: string, e: string): Observable<Comics[] | void>;
    findOne(isbn: string): Observable<Comics>;
    create(body: CreateComicsDto): Observable<Comics>;
    update(isbn: string, body: UpdateComicsDto): Observable<Comics>;
    delete(isbn: string): Observable<void>;
    private _addComics;
    private _findComicsIndexOfList;
}
