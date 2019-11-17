import { Module } from '@nestjs/common';
import { ComicsController } from './comics.controller';
import { ComicsService } from './comics.service';
import {MongooseModule} from "@nestjs/mongoose";
import {ComicsSchema} from "./schemas/comics.schema";

@Module({
  imports: [ MongooseModule.forFeature([ { name: 'Schema', schema: ComicsSchema } ]) ],
  controllers: [ComicsController],
  providers: [ComicsService],
})
export class ComicsModule {}
