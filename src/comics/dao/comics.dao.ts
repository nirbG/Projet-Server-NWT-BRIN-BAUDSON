import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseDocument } from 'mongoose';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Comics} from "../interfaces/comics.interface";
import {CreateComicsDto} from "../dto/create-comics.dto";
import {UpdateComicsDto} from "../dto/update-comics.dto";

@Injectable()
export class ComicsDao {

    /**
     * class constructor
     *
     * @param _comicsModel
     */
    constructor(@InjectModel('Comics') private readonly _comicsModel: Model<Comics>) {
    }

    /**
     * Return all Comics or undefined
     *
     * @returns Observable<Comics[] | void>
     */
    find(): Observable<Comics[] | void> {
        return from(this._comicsModel.find({})).pipe(
            map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
        );
    }

    /**
     * Return one Comics found by id or undefined
     *
     * @param id: string
     * @returns Observable<Comics | void>
     */
    findById(id: string): Observable<Comics | void> {
        return from(this._comicsModel.findById(id)).pipe(
            map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
        );
    }

    /**
     * Add a Comics to the list if not already there
     *
     * @param comics: CreateComicsDto
     * @returns Observable<Comics>
     */
    create(comics: CreateComicsDto): Observable<Comics> {
        return from(this._comicsModel.create(comics)).pipe(
            map((doc: MongooseDocument) => doc.toJSON()),
        );
    }

    /**
     * Update a Comics found by id
     *
     * @param _id: string
     * @param body: UpdateComicsDto
     * @returns Observable<Comics | void>
     */
    findByIdAndUpdate(_id: string, body: UpdateComicsDto): Observable<Comics | void> {
        return from(this._comicsModel.findByIdAndUpdate(_id, body, { new: true })).pipe(
            map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
        );
    }

    /**
     * Delete a Comic found by id
     *
     * @param _id: string
     * @returns Observable<Comics | void>
     */
    findByIdAndRemove(_id: string): Observable<Comics | void> {
        return from(this._comicsModel.findByIdAndRemove(_id)).pipe(
            map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
        );
    }
}
