"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const heros_service_1 = require("./heros.service");
const heros_controller_1 = require("./heros.controller");
const mongoose_1 = require("@nestjs/mongoose");
const heros_schema_1 = require("./schemas/heros.schema");
const heros_dao_1 = require("./dao/heros.dao");
let HerosModule = class HerosModule {
};
HerosModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Heros', schema: heros_schema_1.HerosSchema }])],
        controllers: [heros_controller_1.HerosController],
        providers: [heros_service_1.HerosService, common_1.Logger, heros_dao_1.HerosDao],
    })
], HerosModule);
exports.HerosModule = HerosModule;
//# sourceMappingURL=heros.module.js.map