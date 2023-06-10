const express = require('express');
const routes = require('express').Router();
const app = express();
const mongoose = require("mongoose");

module.exports = {
    app,
    routes,
    express,
    mongoose
};
