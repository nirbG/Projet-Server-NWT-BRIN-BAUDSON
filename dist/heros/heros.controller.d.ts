import { HerosService } from './heros.service';
import { Observable } from 'rxjs';
import { HerosEntity } from "./entities/heros.entity";
import { CreateHeroDto } from "./dto/create-hero.dto";
import { UpdateHeroDto } from "./dto/update-hero.dto";
import { HandlerHeros } from "./validators/handler-heros";
export declare class HerosController {
    private readonly _herosService;
    constructor(_herosService: HerosService);
    findAll(): Observable<HerosEntity[] | void>;
    findSome(start: number, nb: number): Observable<HerosEntity[] | void>;
    findOne(params: HandlerHeros): Observable<HerosEntity>;
    create(createHerosDto: CreateHeroDto): Observable<HerosEntity>;
    update(params: HandlerHeros, updateHerosDto: UpdateHeroDto): Observable<HerosEntity>;
    delete(params: HandlerHeros): Observable<void>;
}
