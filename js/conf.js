var path  = require('path');
var fs = require('fs');
var nconf = require('nconf');

// Command-line takes the cake, environment variables follow
nconf.argv().env();

// Development or production
var pathToEnvSpecificConfig = 'conf/' + process.env.NODE_ENV + '.json';
var envSpecificExists = fs.existsSync(pathToEnvSpecificConfig);
envSpecificExists && nconf.file(process.env.NODE_ENV, pathToEnvSpecificConfig);

// Defaults
nconf.file('default', 'conf/default.json');

// Project metadata, to utilize the name
nconf.file('package', 'package.json');

module.exports = nconf;
