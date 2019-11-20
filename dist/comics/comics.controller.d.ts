import { Observable } from 'rxjs';
import { ComicsService } from './comics.service';
import { CreateComicsDto } from './dto/create-comics.dto';
import { UpdateComicsDto } from './dto/update-comics.dto';
import { ComicsEntity } from "./entities/comics.entity";
import { HandlerComics } from "./validators/handler-comics";
export declare class ComicsController {
    private readonly _comicsService;
    constructor(_comicsService: ComicsService);
    findAll(): Observable<ComicsEntity[] | void>;
    findSome(start: number, nb: number): Observable<ComicsEntity[] | void>;
    findById(params: HandlerComics): Observable<ComicsEntity | void>;
    create(createComicsDto: CreateComicsDto): Observable<ComicsEntity>;
    update(params: HandlerComics, updateComicsDto: UpdateComicsDto): Observable<ComicsEntity>;
    delete(params: HandlerComics): Observable<void>;
}
