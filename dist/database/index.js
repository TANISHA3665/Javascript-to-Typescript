"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config");
const dbURI = `mongodb://${config_1.db.host}:${config_1.db.port}`;
mongoose_1.default
    .connect(dbURI)
    .then(() => "MongoDB Connected")
    .catch(err => console.log(err));
