"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_1 = require("react-router");
let { routes } = require('../../../src/router');
const server_1 = require("react-dom/server");
function handleRedirect(res, redirect) {
    res.redirect(302, redirect.pathname + redirect.search);
}
function handleNotFound(res) {
    res.status(404).send('Not Found');
}
function handleError(res, err) {
    res.status(500).send(err.message);
}
function handleRouter(res, props, isProduction) {
    const html = server_1.renderToString(<react_router_1.RouterContext {...props}/>);
    //console.log(html);
    res.status(200).render('isomorphic-view', {
        env: isProduction ? 'production' : 'development',
        html: html.trim(),
    });
}
module.exports = function (isProduction) {
    return function isoMiddleware(req, res) {
        react_router_1.match({ routes, location: req.url }, (err, redirect, props) => {
            if (err)
                handleError(res, err);
            else if (redirect)
                handleRedirect(res, redirect);
            else if (props)
                handleRouter(res, props, isProduction);
            else
                handleNotFound(res);
        });
    };
};
