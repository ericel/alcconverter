"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const welcome_controller_1 = require("./welcome.controller");
const publicDir = path_1.default.join(__dirname, '..', 'template/views');
// Assign router to the express.Router() instance
const router = express_1.Router();
router.get('/', (req, res) => {
    // Reply with a hello world when no name param is provided
    //res.send('Hello, World!');
    res.render(`${publicDir}/index.hbs`, {
        welcomeController: welcome_controller_1.WelcomeController._routeMain
    });
    // res.sendFile(path.join(publicDir, 'index.html'))
});
