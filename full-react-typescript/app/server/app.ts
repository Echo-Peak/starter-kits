import * as CONFIG  from "../config";
import * as express from "express";
import * as fs from 'fs';
import * as http from 'http';
import * as serverMiddleware from './middleware';
const {middleware ,  requiredMiddleware} = serverMiddleware;
const production : boolean = process.env.NODE_ENV === 'production' || !!~process.argv.indexOf('--production');
const app = express();

let ready = () => console.log(`App running at ${CONFIG.port}`);

app.listen(CONFIG.port , ready);
app.set('view engine' , 'pug');
app.set('views' , CONFIG.paths.views);
app.use(express.static(CONFIG.paths.static));

requiredMiddleware.forEach(m => app.use(m));


middleware.forEach(m => {
  if(m.enabled){
    if(m.deps && typeof m.deps === 'function'){ m.deps()} // evaluate required modules at runtime
    let resolveMiddleware = require(`./middleware/${m.name}`);
    app.use(resolveMiddleware(CONFIG , production));
  }
});

app.get('*' , function(req: any , res: any){

    res.render('index' , {env:process.env.NODE_ENV});
})