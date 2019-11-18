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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const heros_1 = require("../data/heros");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const heros_entity_1 = require("./entities/heros.entity");
const heros_dao_1 = require("./dao/heros.dao");
let HerosService = class HerosService {
    constructor(_herosDao) {
        this._herosDao = _herosDao;
        this._heros = [].concat(heros_1.HEROS);
    }
    findAll() {
        return this._herosDao.find().pipe(operators_1.map(_ => (!!_ && !!_.length) ? _.map(__ => new heros_entity_1.HerosEntity(__)) : undefined));
    }
    findSome(start, end) {
        return rxjs_1.of(this._heros.slice(+start, +end));
    }
    findOne(id) {
        return this._herosDao.findById(id).pipe(operators_1.catchError(e => rxjs_1.throwError(new common_1.UnprocessableEntityException(e.message))), operators_1.flatMap(_ => !!_ ?
            rxjs_1.of(new heros_entity_1.HerosEntity(_)) :
            rxjs_1.throwError(new common_1.NotFoundException(`hero with id '${id}' not found`))));
    }
    create(body) {
        return this._addHeros(body).pipe(operators_1.flatMap(_ => this._herosDao.create(_)), operators_1.catchError(e => e.code = 11000 ? rxjs_1.throwError(new common_1.ConflictException(`People with id '${body.id}' already exists`)) :
            rxjs_1.throwError(new common_1.UnprocessableEntityException(e.message))), operators_1.map(_ => new heros_entity_1.HerosEntity(_)));
    }
    update(id, body) {
        return this._herosDao.findByIdAndUpdate(id, body).pipe(operators_1.flatMap(_ => !!_ ? rxjs_1.of(new heros_entity_1.HerosEntity((_))) :
            rxjs_1.throwError(new common_1.NotFoundException(`Hero with id '${id}' not found`))));
    }
    delete(id) {
        return this._herosDao.findByIdAndRemove(id).pipe(operators_1.catchError(e => rxjs_1.throwError(new common_1.NotFoundException(e.message))), operators_1.flatMap(_ => !!_ ? rxjs_1.of(undefined) :
            rxjs_1.throwError(new common_1.NotFoundException(`Hero with id '${id}' not found`))));
    }
    _addHeros(body) {
        return rxjs_1.of(body).pipe(operators_1.map(_ => Object.assign(_, {
            ennemi: [],
            allie: [],
        })), operators_1.tap(_ => this._heros = this._heros.concat(_)), operators_1.map(_ => new heros_entity_1.HerosEntity(_)));
    }
    _findHeroIndexOfList(id) {
        return rxjs_1.from(this._heros)
            .pipe(operators_1.findIndex(_ => _.id === id), operators_1.flatMap(_ => _ > -1 ?
            rxjs_1.of(_) :
            rxjs_1.throwError(new common_1.NotFoundException(`People with id '${id}' not found`))));
    }
};
HerosService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [heros_dao_1.HerosDao])
], HerosService);
exports.HerosService = HerosService;
//# sourceMappingURL=heros.service.js.map