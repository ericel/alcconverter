import  express from 'express';
import fs from 'fs-extra';
import hbs from 'hbs';
import bodyParser from 'body-parser';
// Create a new express application instance
export const app: express.Application = express();

export const _fs = fs;
export const _hbs = hbs;

export const _bodyParser = bodyParser;

export const _express = express;


export const setTemplate = app.set('view engine', 'hbs');

export const setPartials = hbs.registerPartials(__dirname + '/app/template/views/partials');