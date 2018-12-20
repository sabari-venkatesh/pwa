/* eslint-disable no-console */
import express from "express";
import React from "react";
import cors from "cors";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import routes from "./shared/routes";
import App from "./app";

const app = express();
app.use(cors());

app.use(express.static("./dist"));
// app.set('views', './views');
// app.set('view engine', 'html')

app.get("*", (req, res, next) => {
  const activeRoute = routes.find(
    (route) => matchPath(req.url, route)
  ) || {};
  const promise = activeRoute.init ? activeRoute.init(req.path) : Promise.resolve();
  promise.then((data) => {
    const context = { data }

    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>
        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)
  }).catch(next);
  // promise
  //   .then((data) => {
  //     const markup = renderToString(
  //       <StaticRouter location={req.url} context={{ data }}>
  //         <App />
  //       </StaticRouter>
  //     );
  //     const compile = es6Renderer(__dirname + '/views/index.html', {
  //       locals: {
  //         title: 'Welcome',
  //         markup: markup,
  //         data: serialize(data)
  //       }
  //     }, (err, content) => err || content);
  //     compile.then(output => res.send(output));
  //   }).catch(next);
});
app.listen(3000, () => {
  console.log(`server listening on port 3000`);
})
