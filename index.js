"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Extractor_1 = __importDefault(require("./lib/Extractor"));
const ex = new Extractor_1.default();
ex.extractData();
ex.toCsv();
