"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const Config = require("config");
const swagger_1 = require("@nestjs/swagger");
const comics_module_1 = require("./comics/comics.module");
const heros_module_1 = require("./heros/heros.module");
async function bootstrap(config) {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter({ logger: true }));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Bibliothèque de comics')
        .setDescription('La meilleur bibliothèque de comics disponible à Vandoeuvre')
        .setVersion('1.0')
        .addTag('Comics et Heros')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options, {
        include: [comics_module_1.ComicsModule, heros_module_1.HerosModule],
    });
    swagger_1.SwaggerModule.setup('documentation', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    app.enableCors();
    await app.listen(config.port, config.host);
    common_1.Logger.log(`Application served at http://${config.host}:${config.port}`, 'bootstrap');
}
bootstrap(Config.get('server'));
//# sourceMappingURL=main.js.map