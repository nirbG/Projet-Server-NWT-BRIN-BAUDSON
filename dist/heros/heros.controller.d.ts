import { HerosService } from './heros.service';
import { Observable } from 'rxjs';
import { Hero } from './interfaces/heros.interfaces';
export declare class HerosController {
    private readonly _herosService;
    constructor(_herosService: HerosService);
    findAll(): Observable<Hero[] | void>;
    findSome(start: any, end: any): Observable<Hero[] | void>;
    findOne(id: any): Observable<Hero>;
    create(body: any): Observable<Hero>;
    update(id: number, body: any): Observable<Hero>;
    delete(id: number): Observable<void>;
}
