import { IsNotEmpty, IsString } from 'class-validator';

export class HandlerHeros {
    @IsString()
    @IsNotEmpty()
    id: string;
}
