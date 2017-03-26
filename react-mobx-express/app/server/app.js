let CONFIG = require("../config");
let express = require("express");
const fs = require('fs');
const http = require('http');
const {middleware , requiredMiddleware} = require('./middleware');
let ready = (o) => console.log(`App running at ${CONFIG.server.port}`);

const production = process.env.NODE_ENV === 'production' || process.argv.includes('--production');
let app = express();

app.listen(CONFIG.server.port , ready);
app.set('view engine' , 'pug');
app.set('views' , CONFIG.server.views);
app.use(express.static(CONFIG.server.views));

// middleware before every route
requiredMiddleware.forEach(middleware => app.use(middleware));

//middleware after your routes
middleware.forEach(m => {
  if(m.enabled){
    if(m.deps && typeof m.deps === 'function'){ m.deps()} // evaluate required modules at runtime
    let resolveMiddleware = require(`./middleware/${m.name}`);
    app.use(resolveMiddleware(CONFIG , production));
  }
});

app.get('*' , function(req , res){
    res.render('index' , {env:process.env.NODE_ENV});
})