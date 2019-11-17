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
let HerosService = class HerosService {
    constructor() {
        this._heros = [].concat(heros_1.HEROS);
    }
    findAll() {
        return rxjs_1.of(this._heros).pipe(operators_1.map(_ => (!!_ && !!_.length) ? _.map(__ => new heros_entity_1.HerosEntity(__)) : undefined));
    }
    findSome(start, end) {
        return rxjs_1.of(this._heros.slice(+start, +end));
    }
    findOne(id) {
        return rxjs_1.from(this._heros).pipe(operators_1.find(_ => _.id === id), operators_1.flatMap(_ => !!_ ?
            rxjs_1.of(new heros_entity_1.HerosEntity(_)) :
            rxjs_1.throwError(new common_1.NotFoundException(`hero with id '${id}' not found`))));
    }
    create(body) {
        return rxjs_1.from(this._heros).pipe(operators_1.find(_ => _.id === body.id), operators_1.flatMap(_ => !!_ ?
            rxjs_1.throwError(new common_1.ConflictException(`People with id '${body.id}' already exists`))
            : this._addComics(body)));
    }
    update(id, body) {
        return this._findHeroIndexOfList(id).pipe(operators_1.tap(_ => Object.assign(this._heros[_], body)), operators_1.map(_ => new heros_entity_1.HerosEntity(this._heros[_])));
    }
    delete(id) {
        return this._findHeroIndexOfList(id).pipe(operators_1.flatMap(_ => this._heros = this._heros.filter(__ => __.id === this._heros[_].id)), operators_1.map(_ => undefined));
    }
    _addComics(body) {
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
    __metadata("design:paramtypes", [])
], HerosService);
exports.HerosService = HerosService;
//# sourceMappingURL=heros.service.js.map