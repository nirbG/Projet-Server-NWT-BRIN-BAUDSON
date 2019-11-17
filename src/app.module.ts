import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicsModule } from './comics/comics.module';
import { HerosModule } from './heros/heros.module';
import {MongooseModule, MongooseModuleOptions} from "@nestjs/mongoose";
import * as Config from 'config';

@Module({
  imports: [ComicsModule, HerosModule, MongooseModule.forRoot(Config.get<string>('mongodb.uri'), Config.get<MongooseModuleOptions>('mongodb.options')),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
