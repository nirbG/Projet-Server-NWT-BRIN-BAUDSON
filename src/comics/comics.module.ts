import {Logger, Module} from '@nestjs/common';
import { ComicsController } from './comics.controller';
import { ComicsService } from './comics.service';
import {MongooseModule} from "@nestjs/mongoose";
import {ComicsSchema} from "./schemas/comics.schema";
import {ComicsDao} from "./dao/comics.dao";

@Module({
  imports: [ MongooseModule.forFeature([ { name: 'Comics', schema: ComicsSchema } ]) ],
  controllers: [ComicsController],
  providers: [ComicsService, Logger, ComicsDao],
})
export class ComicsModule {}
