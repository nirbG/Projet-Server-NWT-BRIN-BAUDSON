"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const comics_controller_1 = require("./comics.controller");
const comics_service_1 = require("./comics.service");
const mongoose_1 = require("@nestjs/mongoose");
const comics_schema_1 = require("./schemas/comics.schema");
const comics_dao_1 = require("./dao/comics.dao");
let ComicsModule = class ComicsModule {
};
ComicsModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Comics', schema: comics_schema_1.ComicsSchema }])],
        controllers: [comics_controller_1.ComicsController],
        providers: [comics_service_1.ComicsService, common_1.Logger, comics_dao_1.ComicsDao],
    })
], ComicsModule);
exports.ComicsModule = ComicsModule;
//# sourceMappingURL=comics.module.js.map