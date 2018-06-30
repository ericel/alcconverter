"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const publicDir = path_1.default.join(__dirname, '..', 'template/views');
// Assign router to the express.Router() instance
const router = express_1.Router();
/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
// Template folder
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req, res) => {
    // Reply with a hello world when no name param is provided
    //res.send('Hello, World!');
    res.render(`${publicDir}/index.hbs`, {
        pageTitle: 'Alc Converter',
        welcomeMessage: 'Alc Google Currency Converter'
    });
    // res.sendFile(path.join(publicDir, 'index.html'))
});
router.post('/', (req, res) => {
    console.log(req.body);
    //qs.parse(body);
    res.send('success');
});
router.get('/:name', (req, res) => {
    // Extract the name from the request parameters
    let { name } = req.params;
    // Greet the given name
    res.send(`Hello, ${name}`);
});
// Export the express.Router() instance to be used by server.ts
exports.WelcomeController = router;
