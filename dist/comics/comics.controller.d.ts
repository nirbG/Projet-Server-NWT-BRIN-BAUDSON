import { Observable } from 'rxjs';
import { ComicsService } from './comics.service';
import { CreateComicsDto } from './dto/create-comics.dto';
import { UpdateComicsDto } from './dto/update-comics.dto';
import { HandlerParams } from "../validators/handler-params";
import { ComicsEntity } from "./entities/comics.entity";
export declare class ComicsController {
    private readonly _comicsService;
    constructor(_comicsService: ComicsService);
    findAll(): Observable<ComicsEntity[] | void>;
    findSome(start: string, end: string): Observable<ComicsEntity[] | void>;
    findByIsbn(params: HandlerParams): Observable<ComicsEntity | void>;
    create(createComicsDto: CreateComicsDto): Observable<ComicsEntity>;
    update(params: HandlerParams, updateComicsDto: UpdateComicsDto): Observable<ComicsEntity>;
    delete(params: HandlerParams): Observable<void>;
}
