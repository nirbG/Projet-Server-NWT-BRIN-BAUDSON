import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseDocument } from 'mongoose';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Hero} from "../interfaces/heros.interfaces";

@Injectable()
export class HerosDao {

    constructor(@InjectModel('Heros') private readonly _heroModel: Model<Hero>) {
    }


    find(): Observable<Hero[] | void> {
        return from(this._heroModel.find({}))
            .pipe(
                map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
            );
    }
}
