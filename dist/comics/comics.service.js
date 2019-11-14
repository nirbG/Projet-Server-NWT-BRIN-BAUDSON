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
let ComicsService = class ComicsService {
    constructor() {
        this._comics = [].concat(comics_1.COMICS);
    }
    findAll() {
        return rxjs_1.of(this._comics).pipe(operators_1.map(_ => (!!_ && !!_.length) ? _ : undefined));
    }
    findSome(s, e) {
        return rxjs_1.of(this._comics.slice(+s, +e));
    }
    findOne(isbn) {
        return rxjs_1.from(this._comics).pipe(operators_1.find(_ => _.isbn === isbn), operators_1.flatMap(_ => !!_ ?
            rxjs_1.of(_) :
            rxjs_1.throwError(new common_1.NotFoundException(`comics with isbn '${isbn}' not found`))));
    }
    create(body) {
        return rxjs_1.from(this._comics).pipe(operators_1.find(_ => _.isbn === body.isbn), operators_1.flatMap(_ => !!_ ?
            rxjs_1.throwError(new common_1.ConflictException(`People with isbn '${body.isbn}' already exists`))
            : this._addComics(body)));
    }
    update(isbn, body) {
        return this._findComicsIndexOfList(isbn).pipe(operators_1.tap(_ => Object.assign(this._comics[_], body)), operators_1.map(_ => this._comics[_]));
    }
    delete(isbn) {
        return this._findComicsIndexOfList(isbn).pipe(operators_1.flatMap(_ => this._comics = this._comics.filter(__ => __.isbn === this._comics[_].isbn)), operators_1.map(_ => undefined));
    }
    _addComics(body) {
        return rxjs_1.of(body).pipe(operators_1.map(_ => Object.assign(_, {
            photo: _.isbn + '.jpg',
            mainHeros: {},
            otherHeros: [],
            wish: false,
            inBD: false,
        })), operators_1.tap(_ => this._comics = this._comics.concat(_)));
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
    __metadata("design:paramtypes", [])
], ComicsService);
exports.ComicsService = ComicsService;
//# sourceMappingURL=comics.service.js.map