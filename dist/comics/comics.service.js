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
const comics_1 = require("../data/comics");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const comics_entity_1 = require("./entities/comics.entity");
const comics_dao_1 = require("./dao/comics.dao");
let ComicsService = class ComicsService {
    constructor(_comicsDao) {
        this._comicsDao = _comicsDao;
        this._comics = [].concat(comics_1.COMICS);
    }
    findAll() {
        return this._comicsDao.find().pipe(operators_1.map(_ => (!!_ && !!_.length) ? _.map(__ => new comics_entity_1.ComicsEntity(__)) : undefined));
    }
    findSome(s, e) {
        return rxjs_1.of(this._comics.slice(+s, +e));
    }
    findOne(isbn) {
        return this._comicsDao.findById(isbn).pipe(operators_1.catchError(e => rxjs_1.throwError(new common_1.UnprocessableEntityException(e.message))), operators_1.flatMap(_ => !!_ ?
            rxjs_1.of(new comics_entity_1.ComicsEntity(_)) :
            rxjs_1.throwError(new common_1.NotFoundException(`comics with isbn '${isbn}' not found`))));
    }
    create(body) {
        return this._addComics(body).pipe(operators_1.flatMap(_ => this._comicsDao.create(_)), operators_1.catchError(e => e.code = 11000 ? rxjs_1.throwError(new common_1.ConflictException(`comics with isbn '${body.isbn}' already exists`)) :
            rxjs_1.throwError(new common_1.UnprocessableEntityException(e.message))), operators_1.map(_ => new comics_entity_1.ComicsEntity(_)));
    }
    update(isbn, body) {
        return this._comicsDao.findByIdAndUpdate(isbn, body).pipe(operators_1.flatMap(_ => !!_ ? rxjs_1.of(new comics_entity_1.ComicsEntity((_))) :
            rxjs_1.throwError(new common_1.NotFoundException(`Comics with isbn '${isbn}' not found`))));
    }
    delete(isbn) {
        return this._comicsDao.findByIdAndRemove(isbn).pipe(operators_1.catchError(e => rxjs_1.throwError(new common_1.NotFoundException(e.message))), operators_1.flatMap(_ => !!_ ? rxjs_1.of(undefined) :
            rxjs_1.throwError(new common_1.NotFoundException(`Comics with isbn '${isbn}' not found`))));
    }
    _addComics(body) {
        return rxjs_1.of(body).pipe(operators_1.map(_ => Object.assign(_, {
            photo: _.isbn + '.jpg',
            mainHeros: {},
            otherHeros: [],
            wish: false,
            inBD: false,
        })), operators_1.tap(_ => this._comics = this._comics.concat(_)), operators_1.map(_ => new comics_entity_1.ComicsEntity(_)));
    }
    _findComicsIndexOfList(isbn) {
        return rxjs_1.from(this._comics)
            .pipe(operators_1.findIndex(_ => _.isbn === isbn), operators_1.flatMap(_ => _ > -1 ?
            rxjs_1.of(_) :
            rxjs_1.throwError(new common_1.NotFoundException(`People with id '${isbn}' not found`))));
    }
};
ComicsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [comics_dao_1.ComicsDao])
], ComicsService);
exports.ComicsService = ComicsService;
//# sourceMappingURL=comics.service.js.map