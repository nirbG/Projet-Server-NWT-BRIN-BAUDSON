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
const heros_entity_1 = require("./entities/heros.entity");
const swagger_1 = require("@nestjs/swagger");
const create_hero_dto_1 = require("./dto/create-hero.dto");
const update_hero_dto_1 = require("./dto/update-hero.dto");
const handler_heros_1 = require("./validators/handler-heros");
let HerosController = class HerosController {
    constructor(_herosService) {
        this._herosService = _herosService;
    }
    findAll() {
        return this._herosService.findAll();
    }
    findSome(start, nb) {
        return this._herosService.findSome(parseInt(start.toString()), parseInt(nb.toString()));
    }
    findOne(params) {
        return this._herosService.findOne(params._id);
    }
    create(createHerosDto) {
        return this._herosService.create(createHerosDto);
    }
    update(params, updateHerosDto) {
        return this._herosService.update(params._id, updateHerosDto);
    }
    delete(params) {
        return this._herosService.delete(params._id);
    }
};
__decorate([
    swagger_1.ApiOkResponse({ description: 'Returns an array of heros', type: heros_entity_1.HerosEntity, isArray: true }),
    swagger_1.ApiNoContentResponse({ description: 'No heros exists in database' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], HerosController.prototype, "findAll", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Returns some heros', type: heros_entity_1.HerosEntity }),
    swagger_1.ApiNoContentResponse({ description: 'No heros exists in database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Parameters provided are not good' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    swagger_1.ApiImplicitParam({ name: 'start', description: 'Start of the collection', type: Number }),
    swagger_1.ApiImplicitParam({ name: 'nb', description: 'Number of hero in the collection', type: Number }),
    common_1.Get('/:start/:nb'),
    __param(0, common_1.Param('start')), __param(1, common_1.Param('nb')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", rxjs_1.Observable)
], HerosController.prototype, "findSome", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Returns the hero for the given "id"', type: heros_entity_1.HerosEntity }),
    swagger_1.ApiNotFoundResponse({ description: 'Hero with the given "id" doesn\'t exist in the database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Parameter provided is not good' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    swagger_1.ApiImplicitParam({ name: '_id', description: 'Unique identifier of the hero in the database', type: String }),
    common_1.Get(':_id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [handler_heros_1.HandlerHeros]),
    __metadata("design:returntype", rxjs_1.Observable)
], HerosController.prototype, "findOne", null);
__decorate([
    swagger_1.ApiCreatedResponse({ description: 'The hero has been successfully created', type: heros_entity_1.HerosEntity }),
    swagger_1.ApiConflictResponse({ description: 'The hero already exists in the database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Payload provided is not good' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    swagger_1.ApiImplicitBody({ name: 'CreateHeroDto', description: 'Payload to create a new hero', type: create_hero_dto_1.CreateHeroDto }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hero_dto_1.CreateHeroDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], HerosController.prototype, "create", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'The hero has been successfully updated', type: heros_entity_1.HerosEntity }),
    swagger_1.ApiNotFoundResponse({ description: 'Hero with the given "id" doesn\'t exist in the database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    swagger_1.ApiImplicitParam({ name: '_id', description: 'Unique identifier of the hero in the database', type: String }),
    swagger_1.ApiImplicitBody({ name: 'UpdateHeroDto', description: 'Payload to update a hero', type: update_hero_dto_1.UpdateHeroDto }),
    common_1.Put(':_id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [handler_heros_1.HandlerHeros, update_hero_dto_1.UpdateHeroDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], HerosController.prototype, "update", null);
__decorate([
    swagger_1.ApiNoContentResponse({ description: 'The hero has been successfully deleted' }),
    swagger_1.ApiNotFoundResponse({ description: 'Hero with the given "id" doesn\'t exist in the database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Parameter provided is not good' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    swagger_1.ApiImplicitParam({ name: '_id', description: 'Unique identifier of the hero in the database', type: String }),
    common_1.Delete(':_id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [handler_heros_1.HandlerHeros]),
    __metadata("design:returntype", rxjs_1.Observable)
], HerosController.prototype, "delete", null);
HerosController = __decorate([
    swagger_1.ApiUseTags('heros'),
    common_1.Controller('heros'),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [heros_service_1.HerosService])
], HerosController);
exports.HerosController = HerosController;
//# sourceMappingURL=heros.controller.js.map