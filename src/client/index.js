
import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import match from 'react-router/lib/match';
import { AppContainer } from 'react-hot-loader';
import routes from '../routes';

const root = document.querySelector('#root');

const mount = () => {
  match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
    if (error) {
      // handle error
    } else if (redirectLocation) {
      return;
    } else if (renderProps) {
      render(
        <AppContainer>
          <Router {...renderProps} />
        </AppContainer>,
        root
      );
    } else {
      // handle error
    }
  });
};

if (module.hot) {
  // For hot module replacement we need to register the
  // following components for updates after changes.
  module.hot.accept('../routes', mount);
}

mount();
