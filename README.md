# Universal React Starter-kyt

This Starter-kyt should serve as the base for an advanced, server and client-rendered React app.

## Tools

The following are some of the tools included in this Starter-kyt:

- [Express](https://expressjs.com/) - Server-side rendering
- [React](https://facebook.github.io/react/) - Component library
- [React Router](https://github.com/reactjs/react-router) - Server and client routing
- [Sass Modules](https://github.com/css-modules/css-modules) - CSS Modules with a Sass pre-processor for styles
- [Enzyme](https://github.com/airbnb/enzyme) - React component testing

## Notes on implementation
 
- As a performance optimization, React Router routes are loaded dynamically and chunked separately using the es2015 `System.import` directive. See more about  [Webpack 2 support](https://gist.github.com/sokra/27b24881210b56bbaff7#code-splitting-with-es6) and [dynamic routing](https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md).

## Changelog

