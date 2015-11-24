#! /usr/bin/env node

var pkg = require('../package.json'),
    args = require('./arg-reader.js'),
    testReader = require('./test-reader.js'),
    runner = require('./node-runner.js');

if(args.version){
  console.log(pkg.version);
}else{
  testReader(args.settings.paths).then(function(tests){
    runner(tests, args.settings.config);
  });
}
