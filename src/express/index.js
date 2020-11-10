'use strict';

const express = require(`express`);
const mainRoutes = require(`./routes/main-routes`);
const offersRoutes = require(`./routes/offers-routes`);
const myRoutes = require(`./routes/my-routes`);

const DEFAULT_PORT = 8080;

const app = express();

app.use(`/`, mainRoutes);
app.use(`/offers`, offersRoutes);
app.use(`/my`, myRoutes);

app.listen(DEFAULT_PORT);
