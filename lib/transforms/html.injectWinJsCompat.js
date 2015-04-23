"use strict";

// Node.js built-ins

var path = require("path");

// 3rd-party modules

var cheerio = require("cheerio");

// this module

module.exports = function (opts) {
  var contents = opts.contents;
  var filePath = opts.filePath;

  var $ = cheerio.load(contents);
  if (path.basename(filePath) === "index.html") {
    $("script").first().before("<script src='winstore-jscompat.js'></script>");
  }
  return $.html();
};