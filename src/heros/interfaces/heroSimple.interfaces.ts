import { Document } from 'mongoose';

export interface HeroSimple extends Document{
    _id: string;
    photo?: string;
    name: string;
}
