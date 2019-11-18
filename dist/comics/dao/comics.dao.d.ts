import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { Comics } from "../interfaces/comics.interface";
import { CreateComicsDto } from "../dto/create-comics.dto";
import { UpdateComicsDto } from "../dto/update-comics.dto";
export declare class ComicsDao {
    private readonly _comicsModel;
    constructor(_comicsModel: Model<Comics>);
    find(): Observable<Comics[] | void>;
    findById(id: string): Observable<Comics | void>;
    create(comics: CreateComicsDto): Observable<Comics>;
    findByIdAndUpdate(isbn: string, body: UpdateComicsDto): Observable<Comics | void>;
    findByIdAndRemove(isbn: string): Observable<Comics | void>;
}
