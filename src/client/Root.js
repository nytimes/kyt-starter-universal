
import React from 'react';
import { BrowserRouter } from 'react-router';
import App from '../components/App';

// We need a Root component for React Hot Loading.
function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
