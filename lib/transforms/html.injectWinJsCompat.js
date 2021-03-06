'use strict';

// Node.js built-ins

var path = require('path');

// 3rd-party modules

var cheerio = require('cheerio');

// local modules

const streamify = require('../utils.js').streamify;

// this module

function transform (opts) {
  var contents = opts.contents;
  var filePath = opts.filePath;

  var $ = cheerio.load(contents);
  if (path.basename(filePath) === 'index.html') {
    $('script').first().after('<script src="winstore-jscompat.js"></script>\n');
  }
  return $.html();
}

function htmlInjectWinJsCompat (opts) {
  return streamify(opts, transform);
}

module.exports = htmlInjectWinJsCompat;
module.exports.transform = transform;
