import { Module } from '@nestjs/common';
import { HerosService } from './heros.service';
import { HerosController } from './heros.controller';

@Module({
  providers: [HerosService],
  controllers: [HerosController]
})
export class HerosModule {}
