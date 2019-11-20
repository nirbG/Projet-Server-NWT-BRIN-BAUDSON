import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
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
      .setTitle('Bibliothèque de comics')
      .setDescription('La meilleur bibliothèque de comics disponible à Vandoeuvre')
      .setVersion('1.0')
      .addTag('Comics et Heros')
      .build();
  // create swagger document
  const document = SwaggerModule.createDocument(app, options, {
    include: [ ComicsModule, HerosModule ],
  });
  // setup swagger module
  SwaggerModule.setup('documentation', app, document);


  //Auto-Validation
  app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
  );
  app.enableCors();
  await app.listen(config.port, config.host);
  Logger.log(`Application served at http://${config.host}:${config.port}`, 'bootstrap');
}

bootstrap(Config.get<AppConfig>('server'));
