import {IsMongoId, IsNotEmpty, IsString} from 'class-validator';

export class HandlerHeros {
    @IsString()
    @IsNotEmpty()
    _id: string;
}
