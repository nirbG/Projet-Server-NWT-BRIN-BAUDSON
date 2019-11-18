import {IsMongoId, IsNotEmpty, IsString} from 'class-validator';

export class HandlerComics {
    @IsString()
    @IsNotEmpty()
    _id: string;
}
