"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CONFIG = require("../config");
const express = require("express");
const serverMiddleware = require("./middleware");
const { middleware, requiredMiddleware } = serverMiddleware;
const production = process.env.NODE_ENV === 'production' || !!~process.argv.indexOf('--production');
const app = express();
let ready = () => console.log(`App running at ${CONFIG.port}`);
app.listen(CONFIG.port, ready);
app.set('view engine', 'pug');
app.set('views', CONFIG.paths.views);
app.use(express.static(CONFIG.paths.views));
requiredMiddleware.forEach(m => app.use(m));
middleware.forEach(m => {
    if (m.enabled) {
        if (m.deps && typeof m.deps === 'function') {
            m.deps();
        } // evaluate required modules at runtime
        let resolveMiddleware = require(`./middleware/${m.name}`);
        app.use(resolveMiddleware(CONFIG, production));
    }
});
app.get('*', function (req, res) {
    console.log('ahjsd');
    res.render('index', { env: process.env.NODE_ENV });
});
