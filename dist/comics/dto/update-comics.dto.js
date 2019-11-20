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
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const hero_simple_dto_1 = require("../../heros/dto/hero-simple.dto");
class UpdateComicsDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: 'ISBN number', example: '2365773545' }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdateComicsDto.prototype, "_id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Photo', example: 'default.jpg' }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateComicsDto.prototype, "photo", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Title', example: 'Batman: Of Bats and Rats' }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdateComicsDto.prototype, "title", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Main hero', example: {
            _id: '3',
            photo: 'batman.jpg',
            name: 'Batman',
        } }),
    class_validator_1.IsOptional(),
    class_validator_1.IsInstance(hero_simple_dto_1.HeroSimpleDto),
    class_transformer_1.Type(() => hero_simple_dto_1.HeroSimpleDto),
    class_validator_1.ValidateNested(),
    __metadata("design:type", hero_simple_dto_1.HeroSimpleDto)
], UpdateComicsDto.prototype, "mainHeros", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Supporting heroes or ennemies', example: [{
                _id: "85",
                photo: "superboy.jpg",
                name: "Superboy"
            },
            {
                _id: "5",
                photo: "joker.jpg",
                name: "Joker"
            }] }),
    class_validator_1.IsOptional(),
    class_validator_1.IsInstance(hero_simple_dto_1.HeroSimpleDto, { each: true }),
    class_transformer_1.Type(() => hero_simple_dto_1.HeroSimpleDto),
    class_validator_1.ValidateNested({ each: true }),
    __metadata("design:type", Array)
], UpdateComicsDto.prototype, "otherHeros", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Price', example: 12.50 }),
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], UpdateComicsDto.prototype, "price", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Wish', example: false }),
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateComicsDto.prototype, "wish", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Is it available in BD', example: true }),
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateComicsDto.prototype, "inBD", void 0);
exports.UpdateComicsDto = UpdateComicsDto;
//# sourceMappingURL=update-comics.dto.js.map