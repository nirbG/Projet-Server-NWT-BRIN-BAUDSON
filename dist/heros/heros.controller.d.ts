import { HerosService } from './heros.service';
import { Observable } from 'rxjs';
import { HandlerParams } from "../validators/handler-params";
import { HerosEntity } from "./entities/heros.entity";
export declare class HerosController {
    private readonly _herosService;
    constructor(_herosService: HerosService);
    findAll(): Observable<HerosEntity[] | void>;
    findSome(start: any, end: any): Observable<HerosEntity[] | void>;
    findOne(params: HandlerParams): Observable<HerosEntity>;
    create(body: any): Observable<HerosEntity>;
    update(params: HandlerParams, body: any): Observable<HerosEntity>;
    delete(params: HandlerParams): Observable<void>;
}
