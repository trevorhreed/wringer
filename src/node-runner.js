var wringer = require('./wringer.js'),
    color = require('colors');

(function(){
  function makeFullWidth(text){
    var text = ' ' + text;
    var width = process.stdout.columns - (text.length + 1);
    if(width > 0) while(--width) text += ' ';
    return text;
  }
  var styles = {
    h1pass: function(){ return ' ' + makeFullWidth(this).bold.bgGreen },
    h1fail: function(){ return ' ' + makeFullWidth(this).bold.bgRed },
    h2pass: function(){ return this.bold.green },
    h2fail: function(){ return this.bold.red }
  }
  function addStyle(style, fn){
    String.prototype.__defineGetter__(style, function(){
      var text = fn.apply(this);
      return text;
    });
  }
  for(var key in styles) addStyle(key, styles[key]);
}());

function write(msg, pad){
  if(pad) while(pad--) msg = ' ' + msg;
  console.log(msg);
}

function getFailCount(arr){
  var count = 0;
  for(var i=0; i < arr.length; i++){
    if(arr[i].type == 'FAIL') count++;
  }
  return count;
}

function runner(tests, config){
  wringer.init(config);
  wringer.test(tests).then(function(results){
    console.log();
    for(var i=0; i < results.length; i++){
      var result = results[i];
      title = result.endpoint + ' (tests: ' + result.count + ', failed: ' + getFailCount(result.tests) + ') - ' + result.status;
      title = result.status == 'OK' ? title.h1pass : title.h1fail;
      write(title);
      for(var k=0; k < result.tests.length; k++){
        var test = result.tests[k],
            subTitle = test.type + ': ' + test.message + (' (' + test.ref + ')').dim;
        subTitle = test.type == 'PASS' ? subTitle.h2pass : subTitle.h2fail;
        write(subTitle, 4)
      }
      if(result.tests.length) console.log();
    }
    console.log();
  })
  .catch(function(err){
    console.log(err && err.message);
  });
}

runner.ref = wringer.ref;

module.exports = runner;
