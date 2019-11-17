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
const swagger_1 = require("@nestjs/swagger");
class UpdateHeroDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: 'ID', example: '85' }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdateHeroDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Photo', example: 'Superboy.jpg' }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdateHeroDto.prototype, "photo", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Name', example: 'Superboy' }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdateHeroDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Main Power', example: 'Rapide' }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateHeroDto.prototype, "pouvoir", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: "Hero's nemesis" }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], UpdateHeroDto.prototype, "ennemi", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: "Hero's allies" }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], UpdateHeroDto.prototype, "allie", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Is the Hero human ?', example: true }),
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], UpdateHeroDto.prototype, "isHumain", void 0);
exports.UpdateHeroDto = UpdateHeroDto;
//# sourceMappingURL=update-hero.dto.js.map