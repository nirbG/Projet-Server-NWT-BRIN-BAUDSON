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
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const hero_simple_dto_1 = require("../../heros/dto/hero-simple.dto");
const class_validator_1 = require("class-validator");
let ComicsEntity = class ComicsEntity {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    swagger_1.ApiModelProperty({ description: 'ISBN number', example: '1082365773' }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], ComicsEntity.prototype, "isbn", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Photo', example: '1082365773.jpg' }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], ComicsEntity.prototype, "photo", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Title', example: 'Batman: Of Bats and Rats' }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], ComicsEntity.prototype, "title", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Main hero', example: {
            id: '3',
            photo: 'batman.jpg',
            name: 'Batman',
        } }),
    class_transformer_1.Expose(),
    class_validator_1.IsInstance(hero_simple_dto_1.HeroSimpleDto),
    class_transformer_1.Type(() => hero_simple_dto_1.HeroSimpleDto),
    __metadata("design:type", hero_simple_dto_1.HeroSimpleDto)
], ComicsEntity.prototype, "mainHeros", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Supporting heroes or ennemies', example: [{
                "id": "85",
                "photo": "superboy.jpg",
                "name": "Superboy"
            },
            {
                "id": "5",
                "photo": "joker.jpg",
                "name": "Joker"
            }] }),
    class_transformer_1.Expose(),
    class_validator_1.IsInstance(hero_simple_dto_1.HeroSimpleDto, { each: true }),
    class_transformer_1.Type(() => hero_simple_dto_1.HeroSimpleDto),
    __metadata("design:type", Array)
], ComicsEntity.prototype, "otherHeros", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Price', example: 12.50 }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], ComicsEntity.prototype, "price", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Wish', example: false }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => Boolean),
    __metadata("design:type", Boolean)
], ComicsEntity.prototype, "wish", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Is it available in BD', example: true }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => Boolean),
    __metadata("design:type", Boolean)
], ComicsEntity.prototype, "inBD", void 0);
ComicsEntity = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [Object])
], ComicsEntity);
exports.ComicsEntity = ComicsEntity;
//# sourceMappingURL=comics.entity.js.map