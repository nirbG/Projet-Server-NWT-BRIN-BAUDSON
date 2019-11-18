import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { Hero } from "../interfaces/heros.interfaces";
import { CreateHeroDto } from "../dto/create-hero.dto";
import { UpdateHeroDto } from "../dto/update-hero.dto";
export declare class HerosDao {
    private readonly _heroModel;
    constructor(_heroModel: Model<Hero>);
    find(): Observable<Hero[] | void>;
    findById(id: string): Observable<Hero | void>;
    create(person: CreateHeroDto): Observable<Hero>;
    findByIdAndUpdate(id: string, body: UpdateHeroDto): Observable<Hero | void>;
    findByIdAndRemove(id: string): Observable<Hero | void>;
}
