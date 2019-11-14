import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicsModule } from './comics/comics.module';
import { HerosModule } from './heros/heros.module';
import { SeriesModule } from './series/series.module';

@Module({
  imports: [ComicsModule, HerosModule, SeriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
