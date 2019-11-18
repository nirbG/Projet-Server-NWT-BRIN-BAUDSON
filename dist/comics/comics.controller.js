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
const rxjs_1 = require("rxjs");
const comics_service_1 = require("./comics.service");
const create_comics_dto_1 = require("./dto/create-comics.dto");
const update_comics_dto_1 = require("./dto/update-comics.dto");
const comics_entity_1 = require("./entities/comics.entity");
const swagger_1 = require("@nestjs/swagger");
const handler_comics_1 = require("./validators/handler-comics");
let ComicsController = class ComicsController {
    constructor(_comicsService) {
        this._comicsService = _comicsService;
    }
    findAll() {
        return this._comicsService.findAll();
    }
    findSome(start, end) {
        return this._comicsService.findSome(start, end);
    }
    findByIsbn(params) {
        return this._comicsService.findOne(params.isbn);
    }
    create(createComicsDto) {
        return this._comicsService.create(createComicsDto);
    }
    update(params, updateComicsDto) {
        return this._comicsService.update(params.isbn, updateComicsDto);
    }
    delete(params) {
        return this._comicsService.delete(params.isbn);
    }
};
__decorate([
    swagger_1.ApiOkResponse({ description: 'Return an array of comics', type: comics_entity_1.ComicsEntity, isArray: true }),
    swagger_1.ApiNoContentResponse({ description: 'No comics exists in database' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], ComicsController.prototype, "findAll", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Returns some comics', type: comics_entity_1.ComicsEntity, isArray: true }),
    swagger_1.ApiNoContentResponse({ description: 'No comics exists in database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Parameters provided are not good' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    swagger_1.ApiImplicitParam({ name: 'start', description: 'Start of the collection', type: String }),
    swagger_1.ApiImplicitParam({ name: 'end', description: 'End of the collection', type: String }),
    common_1.Get(':start/:end'),
    __param(0, common_1.Param('start')),
    __param(1, common_1.Param('end')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", rxjs_1.Observable)
], ComicsController.prototype, "findSome", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Returns the comics for the given "isbn"', type: comics_entity_1.ComicsEntity }),
    swagger_1.ApiNotFoundResponse({ description: 'Comics with the given "isbn" doesn\'t exist in the database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Parameter provided is not good' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    swagger_1.ApiImplicitParam({ name: 'isbn', description: 'Unique identifier of the comics in the database', type: String }),
    common_1.Get(':isbn'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [handler_comics_1.HandlerComics]),
    __metadata("design:returntype", rxjs_1.Observable)
], ComicsController.prototype, "findByIsbn", null);
__decorate([
    swagger_1.ApiCreatedResponse({ description: 'The comics has been successfully created', type: comics_entity_1.ComicsEntity }),
    swagger_1.ApiConflictResponse({ description: 'The comics already exists in the database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Payload provided is not good' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    swagger_1.ApiImplicitBody({ name: 'CreateComicsDto', description: 'Payload to create a new comics', type: create_comics_dto_1.CreateComicsDto }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comics_dto_1.CreateComicsDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], ComicsController.prototype, "create", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'The comics has been successfully updated', type: comics_entity_1.ComicsEntity }),
    swagger_1.ApiNotFoundResponse({ description: 'Comics with the given "isbn" doesn\'t exist in the database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    swagger_1.ApiImplicitParam({ name: 'isbn', description: 'Unique identifier of the comics in the database', type: String }),
    swagger_1.ApiImplicitBody({ name: 'UpdateComicsDto', description: 'Payload to update a comics', type: update_comics_dto_1.UpdateComicsDto }),
    common_1.Put(':isbn'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [handler_comics_1.HandlerComics, update_comics_dto_1.UpdateComicsDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], ComicsController.prototype, "update", null);
__decorate([
    swagger_1.ApiNoContentResponse({ description: 'The comics has been successfully deleted' }),
    swagger_1.ApiNotFoundResponse({ description: 'Comics with the given "isbn" doesn\'t exist in the database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Parameter provided is not good' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    swagger_1.ApiImplicitParam({ name: 'isbn', description: 'Unique identifier of the comics in the database', type: String }),
    common_1.Delete(':isbn'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [handler_comics_1.HandlerComics]),
    __metadata("design:returntype", rxjs_1.Observable)
], ComicsController.prototype, "delete", null);
ComicsController = __decorate([
    swagger_1.ApiUseTags('comics'),
    common_1.Controller('comics'),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [comics_service_1.ComicsService])
], ComicsController);
exports.ComicsController = ComicsController;
//# sourceMappingURL=comics.controller.js.map