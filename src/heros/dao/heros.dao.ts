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

    /**
     * class constructor
     *
     * @param _heroModel
     */
    constructor(@InjectModel('Heros') private readonly _heroModel: Model<Hero>) {
    }

    /**
     * Return all Heros or undefined
     *
     * @returns Observable<Heros[] | void>
     */
    find(): Observable<Hero[] | void> {
        return from(this._heroModel.find({})).pipe(
            map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
        );
    }

    /**
     * Return some Heros or undefined
     *
     * @returns Observable<Heros[] | void>
     */
    findSome(start: number, nb: number): Observable<Hero[] | void> {

        return from(this._heroModel.find({}).skip(parseInt(start.toString())).limit(parseInt(nb.toString()))).pipe(
            map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
        );
    }

    /**
     * Return one Hero found by id or undefined
     *
     * @param id: string
     * @returns Observable<Hero | void>
     */
    findById(id: string): Observable<Hero | void> {
        return from(this._heroModel.findById(id)).pipe(
            map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
        );
    }

    /**
     * Add a Hero to the list if not already there
     *
     * @param heros: CreateHeroDto
     * @returns Observable<Hero>
     */
    create(heros: CreateHeroDto): Observable<Hero> {
        return from(this._heroModel.create(heros)).pipe(
            map((doc: MongooseDocument) => doc.toJSON()),
        );
    }

    /**
     * Update a Hero found by id
     *
     * @param _id: string
     * @param body: UpdateHeroDto
     * @returns Observable<Hero | void>
     */
    findByIdAndUpdate(_id: string, body: UpdateHeroDto): Observable<Hero | void> {
        return from(this._heroModel.findByIdAndUpdate(_id, body, { new: true })).pipe(
            map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
        );
    }

    /**
     * Delete a Hero found by id
     *
     * @param _id: string
     * @returns Observable<Hero | void>
     */
    findByIdAndRemove(_id: string): Observable<Hero | void> {
        return from(this._heroModel.findByIdAndRemove(_id)).pipe(
            map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
        );
    }
}
