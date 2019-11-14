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
let ComicsModule = class ComicsModule {
};
ComicsModule = __decorate([
    common_1.Module({
        controllers: [comics_controller_1.ComicsController],
        providers: [comics_service_1.ComicsService],
    })
], ComicsModule);
exports.ComicsModule = ComicsModule;
//# sourceMappingURL=comics.module.js.map