var fs = require('fs'),
    path = require('path'),
    args = process.argv.slice(2),
    tests = [];

if(!String.prototype.endsWith){
  String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  };
}

function addFile(_path){
  return new Promise(function(resolve, reject){
    fs.readFile(_path, 'utf8', function(err, data){
      if(err) return reject(err);
      var test = JSON.parse(data);
      if(Array.isArray(test)){
        tests = tests.concat(test);
      }else{
        tests.push(test);
      }
      resolve();
    })
  });
}
function addFilesFromDirectory(_path, cb){
  return new Promise(function(resolve, reject){
    fs.readdir(_path, function(err, _files){
      if(err) return reject(err);
      Promise.all(_files.map(function(_file){
        _file = path.join(_path, _file);
        return checkStat(_file);
      })).then(function(){
        resolve();
      });
    });
  });
}
function checkStat(_path){
  return new Promise(function(resolve, reject){
    _path = path.resolve(_path);
    fs.stat(_path, function(err, _info){
      if(err) return reject(err);
      if(_info.isDirectory()) {
        addFilesFromDirectory(_path).then(function(){
          resolve();
        });
      }else if(_info.isFile()) {
        if(!_path.endsWith('.test.json')) return resolve();
        addFile(_path).then(function(){
          resolve()
        });
      }
    });
  });
}
function checkStats(_paths){
  return Promise.all(_paths.map(function(_path){
    return checkStat(_path);
  }));
}

module.exports = function(paths){
  return new Promise(function(resolve, reject){
    checkStats(paths).then(function(){
      resolve(tests);
    })
    .catch(function(err){
      reject(err);
    });
  });
}
