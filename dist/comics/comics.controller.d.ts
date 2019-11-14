import { Observable } from 'rxjs';
import { ComicsService } from './comics.service';
import { Comics } from './interfaces/comics.interface';
import { CreateComicsDto } from './dto/create-comics.dto';
import { UpdateComicsDto } from './dto/update-comics.dto';
export declare class ComicsController {
    private readonly _comicsService;
    constructor(_comicsService: ComicsService);
    findAll(): Observable<Comics[] | void>;
    findSome(start: string, end: string): Observable<Comics[] | void>;
    findByIsbn(isbn: string): Observable<Comics | void>;
    create(createComicsDto: CreateComicsDto): Observable<Comics>;
    update(isbn: string, updateComicsDto: UpdateComicsDto): Observable<Comics>;
    delete(isbn: string): Observable<void>;
}
