import { IsNotEmpty, IsString } from 'class-validator';

export class HandlerComics {
    @IsString()
    @IsNotEmpty()
    isbn: string;
}
