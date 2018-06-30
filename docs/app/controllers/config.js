"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const hbs_1 = __importDefault(require("hbs"));
const body_parser_1 = __importDefault(require("body-parser"));
// Create a new express application instance
exports.app = express_1.default();
exports._fs = fs_extra_1.default;
exports._hbs = hbs_1.default;
exports._bodyParser = body_parser_1.default;
exports._express = express_1.default;
exports.setTemplate = exports.app.set('view engine', 'hbs');
exports.setPartials = hbs_1.default.registerPartials(__dirname + '/app/template/views/partials');
