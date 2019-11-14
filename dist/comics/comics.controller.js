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
    findByIsbn(isbn) {
        return this._comicsService.findOne(isbn);
    }
    create(createComicsDto) {
        return this._comicsService.create(createComicsDto);
    }
    update(isbn, updateComicsDto) {
        return this._comicsService.update(isbn, updateComicsDto);
    }
    delete(isbn) {
        return this._comicsService.delete(isbn);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], ComicsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':start/:end'),
    __param(0, common_1.Param('start')),
    __param(1, common_1.Param('end')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", rxjs_1.Observable)
], ComicsController.prototype, "findSome", null);
__decorate([
    common_1.Get(':isbn'),
    __param(0, common_1.Param('isbn')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], ComicsController.prototype, "findByIsbn", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comics_dto_1.CreateComicsDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], ComicsController.prototype, "create", null);
__decorate([
    common_1.Put(':isbn'),
    __param(0, common_1.Param('isbn')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], ComicsController.prototype, "update", null);
__decorate([
    common_1.Delete(':isbn'),
    __param(0, common_1.Param('isbn')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], ComicsController.prototype, "delete", null);
ComicsController = __decorate([
    common_1.Controller('comics'),
    __metadata("design:paramtypes", [comics_service_1.ComicsService])
], ComicsController);
exports.ComicsController = ComicsController;
//# sourceMappingURL=comics.controller.js.map