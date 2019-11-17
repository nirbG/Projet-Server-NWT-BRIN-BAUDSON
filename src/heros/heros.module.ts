import { Module } from '@nestjs/common';
import { HerosService } from './heros.service';
import { HerosController } from './heros.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {HerosSchema} from "./schemas/heros.schema";

@Module({
  imports: [ MongooseModule.forFeature([ { name: 'Heros', schema: HerosSchema } ]) ],
  providers: [HerosService],
  controllers: [HerosController]
})
export class HerosModule {}
