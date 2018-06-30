// Import only what we need from express
import { Router, Request, Response } from 'express';
import path from 'path';

import * as config from './config';


const publicDir = path.join(__dirname, '..', 'template/views')
// Assign router to the express.Router() instance
const router: Router = Router();

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */


// Template folder
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req: Request, res: Response) => {
    // Reply with a hello world when no name param is provided
    //res.send('Hello, World!');
      res.render(`${publicDir}/index.hbs`, {
          pageTitle: 'Alc Converter',
          welcomeMessage: 'Alc Google Currency Converter'
      });  
   // res.sendFile(path.join(publicDir, 'index.html'))
});

router.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    //qs.parse(body);
    res.send('success')
})

router.get('/:name', (req: Request, res: Response) => {
    // Extract the name from the request parameters
    let { name } = req.params;

    // Greet the given name
    res.send(`Hello, ${name}`);
});





// Export the express.Router() instance to be used by server.ts
export const WelcomeController: Router = router;