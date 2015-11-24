var fs = require('fs'),
    path = require('path'),
    minimist = require('minimist'),
    args = minimist(process.argv.slice(2)),
    cwd = args.d || process.cwd(),
    env = args.e ? '.' + args.e : '',
    file = args.w || path.join(cwd, 'wringer' + env + '.json'),
    args = {
      version: !!args.v,
      settings: {
        paths: [cwd],
        config: {}
      }
    };

try{
  var json = fs.readFileSync(file),
      fileSettings = JSON.parse(json);
  for(var p in fileSettings){
    args.settings[p] = fileSettings[p];
  }
}catch(err){
  console.log(err);
  process.exit(-1);
}

module.exports = args;
