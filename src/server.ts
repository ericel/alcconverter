import * as config from './app/controllers/config';
// Import WelcomeController from controllers entry point
import {WelcomeController} from './app/controllers';

// The port the express app will listen on
const port: any = process.env.PORT || 3000;



config._hbs.registerPartials(__dirname + '/app/template/views/partials');

config.app.set('view engine', 'hbs');
// Template folder
config.app.use(config._express.static(__dirname + '/app/template'));


/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
config.app.use(config._bodyParser.json());

/*
config.app.post('/',  (req, res) => {
  console.log(req.body);
  res.send('success');
});
/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */


/*app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
  
    console.log(log);
    fs.appendFile('server.log', log + '\n');
    next();
  });
*/
config._hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
  });
  
  config._hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

config.app.use('/', WelcomeController);

// Serve the application at the given port
config.app.listen(port, () => {
    config._fs.copy('src/app/template', 'docs/app/template/')
    .then(() => console.log('success!'))
    .catch(err => console.error(err))
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});