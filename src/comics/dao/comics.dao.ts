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

    constructor(@InjectModel('Comics') private readonly _comicsModel: Model<Comics>) {
    }


    find(): Observable<Comics[] | void> {
        return from(this._comicsModel.find({})).pipe(
            map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
        );
    }

    findById(id: string): Observable<Comics | void> {
        return from(this._comicsModel.findById(id)).pipe(
            map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
        );
    }

    create(comics: CreateComicsDto): Observable<Comics> {
        return from(this._comicsModel.create(comics)).pipe(
            map((doc: MongooseDocument) => doc.toJSON()),
        );
    }

    findByIdAndUpdate(isbn: string, body: UpdateComicsDto): Observable<Comics | void> {
        return from(this._comicsModel.findByIdAndUpdate(isbn, body, { new: true })).pipe(
            map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
        );
    }

    findByIdAndRemove(isbn: string): Observable<Comics | void> {
        return from(this._comicsModel.findByIdAndRemove(isbn)).pipe(
            map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
        );
    }
}
