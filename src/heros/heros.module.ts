import { Module } from '@nestjs/common';
import { HerosService } from './heros.service';
import { HerosController } from './heros.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {HerosSchema} from "./schemas/heros.schema";
import {HerosDao} from "./dao/heros.dao";

@Module({
  imports: [ MongooseModule.forFeature([ { name: 'Heros', schema: HerosSchema } ]) ],
  controllers: [HerosController],
  providers: [HerosService, HerosDao],


})
export class HerosModule {}
