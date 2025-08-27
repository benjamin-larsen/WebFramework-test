const webpack = require('webpack');
const fs = require("fs");

if (!fs.existsSync("../dist")) {
    fs.mkdirSync("../dist")
}

if (!fs.existsSync("../dist/assets")) {
    fs.mkdirSync("../dist/assets")
}