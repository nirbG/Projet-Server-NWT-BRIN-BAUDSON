import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as Config from 'config';
import { AppConfig } from './app-config.interface';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {ComicsModule} from "./comics/comics.module";
import {HerosModule} from "./heros/heros.module";

async function bootstrap(config: AppConfig) {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );


  const options = new DocumentBuilder()
      .setTitle('titre temporaire')
      .setDescription('description temporaire')
      .setVersion('1.0')
      .addTag('tag temporaire')
      .build();
  // create swagger document
  const document = SwaggerModule.createDocument(app, options, {
    include: [ ComicsModule, HerosModule ],
  });

  // setup swagger module
  SwaggerModule.setup('temp', app, document);

  app.enableCors();
  await app.listen(config.port, config.host);
  Logger.log(`Application served at http://${config.host}:${config.port}`, 'bootstrap');
}

bootstrap(Config.get<AppConfig>('server'));
