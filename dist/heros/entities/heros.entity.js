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
let HerosEntity = class HerosEntity {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    swagger_1.ApiModelProperty({ description: 'ID', example: '85' }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], HerosEntity.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Photo', example: 'Superboy.jpg' }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], HerosEntity.prototype, "photo", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Name', example: 'Superboy' }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], HerosEntity.prototype, "name", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Main Power', example: 'Rapide' }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], HerosEntity.prototype, "pouvoir", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: "Hero's nemesis" }),
    class_transformer_1.Expose(),
    __metadata("design:type", Array)
], HerosEntity.prototype, "ennemi", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: "Hero's allies" }),
    class_transformer_1.Expose(),
    __metadata("design:type", Array)
], HerosEntity.prototype, "allie", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Is the Hero human ?', example: true }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => Boolean),
    __metadata("design:type", Boolean)
], HerosEntity.prototype, "isHumain", void 0);
HerosEntity = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [Object])
], HerosEntity);
exports.HerosEntity = HerosEntity;
//# sourceMappingURL=heros.entity.js.map