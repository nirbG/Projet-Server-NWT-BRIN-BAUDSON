import { Document } from 'mongoose';

export interface HeroSimple extends Document{
    id: string;
    photo?: string;
    name: string;
}
