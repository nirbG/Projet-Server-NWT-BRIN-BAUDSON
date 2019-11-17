import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseDocument } from 'mongoose';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Comics} from "../interfaces/comics.interface";

@Injectable()
export class ComicsDao {

    constructor(@InjectModel('Comics') private readonly _comicsModel: Model<Comics>) {
    }


    find(): Observable<Comics[] | void> {
        return from(this._comicsModel.find({}))
            .pipe(
                map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
            );
    }
}
