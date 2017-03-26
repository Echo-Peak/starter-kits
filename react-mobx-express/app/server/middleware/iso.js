import React from 'react';
import {RouterContext , match} from 'react-router';
let {routes} = require('../../../src/router');
import {renderToString} from 'react-dom/server';
function handleRedirect(res, redirect) {
  res.redirect(302, redirect.pathname + redirect.search);
}

function handleNotFound(res) {
  res.status(404).send('Not Found');
}

function handleError(res, err) {
  res.status(500).send(err.message);
}

function handleRouter(res, props , isProduction) {
  const html = renderToString(<RouterContext {...props} />);
  //console.log(html);
  res.status(200).render('isomorphic-view', {
      env: isProduction ? 'production' : 'development',
      html: html.trim(),
    });
}

module.exports = function(isProduction){

    return function isoMiddleware(req, res) {
      match({ routes, location: req.url },
        (err, redirect, props) => {
          if (err) handleError(res, err);
          else if (redirect) handleRedirect(res, redirect);
          else if (props) handleRouter(res, props , isProduction);
          else handleNotFound(res);
        });
      }
}
