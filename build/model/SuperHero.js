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
exports.SuperHero = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let SuperHero = class SuperHero extends sequelize_typescript_1.Model {
};
exports.SuperHero = SuperHero;
SuperHero.SH_TABLE_NAME = "superheroes";
SuperHero.SH_ID = "id";
SuperHero.SH_NAME = "name";
SuperHero.SH_REAL_NAME = "real_name";
SuperHero.SH_GENDER = "gender";
SuperHero.SH_BIRTH_DATE = "birth_date";
SuperHero.SH_FIRST_APPEARANCE = "first_appearance";
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: SuperHero.SH_ID,
    }),
    __metadata("design:type", Number)
], SuperHero.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        field: SuperHero.SH_NAME,
    }),
    __metadata("design:type", String)
], SuperHero.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: SuperHero.SH_REAL_NAME,
    }),
    __metadata("design:type", String)
], SuperHero.prototype, "real_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: SuperHero.SH_GENDER,
    }),
    __metadata("design:type", String)
], SuperHero.prototype, "gender", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        field: SuperHero.SH_BIRTH_DATE,
    }),
    __metadata("design:type", String)
], SuperHero.prototype, "birth_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: SuperHero.SH_FIRST_APPEARANCE,
    }),
    __metadata("design:type", String)
], SuperHero.prototype, "first_appearance", void 0);
exports.SuperHero = SuperHero = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: SuperHero.SH_TABLE_NAME,
    })
], SuperHero);
