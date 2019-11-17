import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseDocument } from 'mongoose';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Hero} from "../interfaces/heros.interfaces";
import {CreateHeroDto} from "../dto/create-hero.dto";
import {UpdateHeroDto} from "../dto/update-hero.dto";

@Injectable()
export class HerosDao {

    constructor(@InjectModel('Heros') private readonly _heroModel: Model<Hero>) {
    }


    find(): Observable<Hero[] | void> {
        return from(this._heroModel.find({})).pipe(
            map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
        );
    }

    findById(id: string): Observable<Hero | void> {
        return from(this._heroModel.findById(id)).pipe(
            map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
        );
    }

    create(person: CreateHeroDto): Observable<Hero> {
        return from(this._heroModel.create(person)).pipe(
            map((doc: MongooseDocument) => doc.toJSON()),
        );
    }

    findByIdAndUpdate(id: string, body: UpdateHeroDto): Observable<Hero | void> {
        return from(this._heroModel.findByIdAndUpdate(id, body, { new: true })).pipe(
            map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
        );
    }

    findByIdAndRemove(id: string): Observable<Hero | void> {
        return from(this._heroModel.findByIdAndRemove(id)).pipe(
            map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
        );
    }
}
