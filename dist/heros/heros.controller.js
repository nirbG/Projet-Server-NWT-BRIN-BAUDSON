"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const heros_service_1 = require("./heros.service");
const rxjs_1 = require("rxjs");
let HerosController = class HerosController {
    constructor(_herosService) {
        this._herosService = _herosService;
    }
    findAll() {
        return this._herosService.findAll();
    }
    findSome(start, end) {
        return this._herosService.findSome(start, end);
    }
    findOne(id) {
        return this._herosService.findOne(id);
    }
    create(body) {
        return this.create(body);
    }
    update(id, body) {
        return this.update(id, body);
    }
    delete(id) {
        return this.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], HerosController.prototype, "findAll", null);
__decorate([
    common_1.Get(':start/:end'),
    __param(0, common_1.Param('start')), __param(1, common_1.Param('end')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], HerosController.prototype, "findSome", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], HerosController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], HerosController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], HerosController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", rxjs_1.Observable)
], HerosController.prototype, "delete", null);
HerosController = __decorate([
    common_1.Controller('heros'),
    __metadata("design:paramtypes", [heros_service_1.HerosService])
], HerosController);
exports.HerosController = HerosController;
//# sourceMappingURL=heros.controller.js.map