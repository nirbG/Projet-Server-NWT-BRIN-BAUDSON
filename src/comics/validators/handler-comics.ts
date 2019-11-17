import {IsMongoId, IsNotEmpty, IsString} from 'class-validator';

export class HandlerComics {
    @IsMongoId()
    @IsString()
    @IsNotEmpty()
    isbn: string;
}
