import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicsModule } from './comics/comics.module';
import { HerosModule } from './heros/heros.module';

@Module({
  imports: [ComicsModule, HerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
