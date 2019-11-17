import {IsMongoId, IsNotEmpty, IsString} from 'class-validator';

export class HandlerHeros {
    @IsMongoId()
    @IsString()
    @IsNotEmpty()
    id: string;
}
