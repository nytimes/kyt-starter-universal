
import express from 'express';
import compression from 'compression';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerRouter, createServerRenderContext } from 'react-router';
import App from '../components/App';
import template from './template';

const clientAssets = require(KYT.ASSETS_MANIFEST); // eslint-disable-line import/no-dynamic-require
const app = express();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());

// Setup the public directory so that we can server static assets.
app.use(express.static(path.join(process.cwd(), KYT.PUBLIC_DIR)));

// Setup server side routing.
app.get('*', (request, response) => {
  const context = createServerRenderContext();
  let markup = renderToString(
    <ServerRouter location={request.url} context={context}>
      <App />
    </ServerRouter>
  );
  const result = context.getResult();
  if (result.redirect) {
    response.redirect(302, `${result.redirect.pathname}${result.redirect.search}`);
  } else {
    if (result.missed) {
      response.status(404);
      markup = renderToString(
        <ServerRouter location={request.url} context={context}>
          <App />
        </ServerRouter>
      );
    } else {
      response.status(200);
    }
    response.send(template({
      root: markup,
      jsBundle: clientAssets.main.js,
      cssBundle: clientAssets.main.css,
    }));
  }
});

app.listen(parseInt(KYT.SERVER_PORT, 10));
