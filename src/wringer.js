(function(global, factory){
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module !== 'undefined' && module.exports){
    // CommonJS. Define export.
    global.fetch = require('node-fetch');
    module.exports = factory(global);
  } else {
    // Browser globals
    global.wringer = factory(global);
  }
}(this, function(global){

  var fetch = global.fetch;

  // tv4 v1.2.7 compressed (https://github.com/geraintluff/tv4/tree/v1.2.7)
  // Compiled using Google Closure Compiler (http://closure-compiler.appspot.com/)
  !function(e,r){e.tv4=r()}(this,function(){function e(e){return encodeURI(e).replace(/%25[0-9][0-9]/g,function(e){return"%"+e.substring(3)})}function r(r){var t="";f[r.charAt(0)]&&(t=r.charAt(0),r=r.substring(1));var i="",n="",a=!0,o=!1,s=!1;"+"===t?a=!1:"."===t?i=n=".":"/"===t?i=n="/":"#"===t?(n="#",a=!1):";"===t?(i=n=";",s=o=!0):"?"===t?(n="?",i="&",o=!0):"&"===t&&(i=n="&",o=!0),t=[],r=r.split(",");for(var l=[],h=0;h<r.length;h++){var u=r[h],c=null;-1!==u.indexOf(":")&&(c=u.split(":"),u=c[0],c=parseInt(c[1],10));for(var d={};p[u.charAt(u.length-1)];)d[u.charAt(u.length-1)]=!0,u=u.substring(0,u.length-1);l.push({truncate:c,name:u,suffices:d}),t.push(u)}return r=function(r){for(var t="",h=0,u=0;u<l.length;u++){var f=l[u],p=r(f.name);if(null===p||void 0===p||Array.isArray(p)&&0===p.length||"object"==typeof p&&0===Object.keys(p).length)h++;else if(t=u===h?t+n:t+(i||","),Array.isArray(p)){o&&(t+=f.name+"=");for(var c=0;c<p.length;c++)c>0&&(t+=f.suffices["*"]?i||",":",",f.suffices["*"]&&o&&(t+=f.name+"=")),t+=a?encodeURIComponent(p[c]).replace(/!/g,"%21"):e(p[c])}else if("object"==typeof p){o&&!f.suffices["*"]&&(t+=f.name+"=");var d,c=!0;for(d in p)c||(t+=f.suffices["*"]?i||",":","),c=!1,t+=a?encodeURIComponent(d).replace(/!/g,"%21"):e(d),t+=f.suffices["*"]?"=":",",t+=a?encodeURIComponent(p[d]).replace(/!/g,"%21"):e(p[d])}else o&&(t+=f.name,s&&""===p||(t+="=")),null!=f.truncate&&(p=p.substring(0,f.truncate)),t+=a?encodeURIComponent(p).replace(/!/g,"%21"):e(p)}return t},r.varNames=t,{prefix:n,substitution:r}}function t(e){if(!(this instanceof t))return new t(e);for(var i=e.split("{"),n=[i.shift()],a=[],o=[],s=[];0<i.length;){var l=i.shift(),h=l.split("}")[0],l=l.substring(h.length+1),h=r(h);o.push(h.substitution),a.push(h.prefix),n.push(l),s=s.concat(h.substitution.varNames)}this.fill=function(e){for(var r=n[0],t=0;t<o.length;t++)r+=(0,o[t])(e),r+=n[t+1];return r},this.varNames=s,this.template=e}function i(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(Array.isArray(e)!==Array.isArray(r))return!1;if(Array.isArray(e)){if(e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(!i(e[t],r[t]))return!1}else{for(t in e)if(void 0===r[t]&&void 0!==e[t])return!1;for(t in r)if(void 0===e[t]&&void 0!==r[t])return!1;for(t in e)if(!i(e[t],r[t]))return!1}return!0}return!1}function n(e){return(e=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/))?{href:e[0]||"",protocol:e[1]||"",authority:e[2]||"",host:e[3]||"",hostname:e[4]||"",port:e[5]||"",pathname:e[6]||"",search:e[7]||"",hash:e[8]||""}:null}function a(e,r){function t(e){var r=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?r.pop():r.push(e)}),r.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}return r=n(r||""),e=n(e||""),r&&e?(r.protocol||e.protocol)+(r.protocol||r.authority?r.authority:e.authority)+t(r.protocol||r.authority||"/"===r.pathname.charAt(0)?r.pathname:r.pathname?(e.authority&&!e.pathname?"/":"")+e.pathname.slice(0,e.pathname.lastIndexOf("/")+1)+r.pathname:e.pathname)+(r.protocol||r.authority||r.pathname?r.search:r.search||e.search)+r.hash:null}function o(e){return e.split("#")[0]}function s(e,r){if(e&&"object"==typeof e)if(void 0===r?r=e.id:"string"==typeof e.id&&(r=a(r,e.id),e.id=r),Array.isArray(e))for(var t=0;t<e.length;t++)s(e[t],r);else for(t in"string"==typeof e.$ref&&(e.$ref=a(r,e.$ref)),e)"enum"!==t&&s(e[t],r)}function l(e){var r=O[e||"en"];return function(e){var t=r[e.code]||E[e.code];if("string"!=typeof t)return"Unknown error code "+e.code+": "+JSON.stringify(e.messageParams);var i=e.params;return t.replace(/\{([^{}]*)\}/g,function(e,r){var t=i[r];return"string"==typeof t||"number"==typeof t?t:e})}}function h(e,r,t,i,n){if(Error.call(this),void 0===e)throw Error("No error code supplied: "+i);if(this.message="",this.params=r,this.code=e,this.dataPath=t||"",this.schemaPath=i||"",this.subErrors=n||null,e=Error(this.message),this.stack=e.stack||e.stacktrace,!this.stack)try{throw e}catch(a){this.stack=a.stack||a.stacktrace}}function u(e){var r,t,i=new c,n={setErrorReporter:function(e){return"string"==typeof e?this.language(e):(t=e,!0)},addFormat:function(){i.addFormat.apply(i,arguments)},language:function(e){return e?(O[e]||(e=e.split("-")[0]),O[e]?r=e:!1):r},addLanguage:function(e,r){for(var t in v)r[t]&&!r[v[t]]&&(r[v[t]]=r[t]);var i=e.split("-")[0];if(O[i])for(t in O[e]=Object.create(O[i]),r)"undefined"==typeof O[i][t]&&(O[i][t]=r[t]),O[e][t]=r[t];else O[e]=r,O[i]=r;return this},freshApi:function(e){var r=u();return e&&r.language(e),r},validate:function(e,n,a,o){var s=l(r);a=new c(i,!1,t?function(e,r,i){return t(e,r,i)||s(e,r,i)}:s,a,o),"string"==typeof n&&(n={$ref:n}),a.addSchema("",n);var h=a.validateAll(e,n,null,null,"");return!h&&o&&(h=a.banUnknownProperties(e,n)),this.error=h,this.missing=a.missing,this.valid=null===h},validateResult:function(){var e={};return this.validate.apply(e,arguments),e},validateMultiple:function(e,n,a,o){var s=l(r);return a=new c(i,!0,t?function(e,r,i){return t(e,r,i)||s(e,r,i)}:s,a,o),"string"==typeof n&&(n={$ref:n}),a.addSchema("",n),a.validateAll(e,n,null,null,""),o&&a.banUnknownProperties(e,n),e={},e.errors=a.errors,e.missing=a.missing,e.valid=0===e.errors.length,e},addSchema:function(){return i.addSchema.apply(i,arguments)},getSchema:function(){return i.getSchema.apply(i,arguments)},getSchemaMap:function(){return i.getSchemaMap.apply(i,arguments)},getSchemaUris:function(){return i.getSchemaUris.apply(i,arguments)},getMissingUris:function(){return i.getMissingUris.apply(i,arguments)},dropSchemas:function(){i.dropSchemas.apply(i,arguments)},defineKeyword:function(){i.defineKeyword.apply(i,arguments)},defineError:function(e,r,t){if("string"!=typeof e||!/^[A-Z]+(_[A-Z]+)*$/.test(e))throw Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");if("number"!=typeof r||0!==r%1||1e4>r)throw Error("Code number must be an integer > 10000");if("undefined"!=typeof v[e])throw Error("Error already defined: "+e+" as "+v[e]);if("undefined"!=typeof g[r])throw Error("Error code already used: "+g[r]+" as "+r);v[e]=r,g[r]=e,E[e]=E[r]=t;for(var i in O)t=O[i],t[e]&&(t[r]=t[r]||t[e])},reset:function(){i.reset(),this.error=null,this.missing=[],this.valid=!0},missing:[],error:null,valid:!0,normSchema:s,resolveUrl:a,getDocumentUri:o,errorCodes:v};return n.language(e||"en"),n}Object.keys||(Object.keys=function(){var e=Object.prototype.hasOwnProperty,r=!{toString:null}.propertyIsEnumerable("toString"),t="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),i=t.length;return function(n){if("object"!=typeof n&&"function"!=typeof n||null===n)throw new TypeError("Object.keys called on non-object");var a,o=[];for(a in n)e.call(n,a)&&o.push(a);if(r)for(a=0;i>a;a++)e.call(n,t[a])&&o.push(t[a]);return o}}()),Object.create||(Object.create=function(){function e(){}return function(r){if(1!==arguments.length)throw Error("Object.create implementation only accepts one parameter.");return e.prototype=r,new e}}()),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null===this)throw new TypeError;var r=Object(this),t=r.length>>>0;if(0===t)return-1;var i=0;if(1<arguments.length&&(i=Number(arguments[1]),i!==i?i=0:0!==i&&1/0!==i&&-(1/0)!==i&&(i=(i>0||-1)*Math.floor(Math.abs(i)))),i>=t)return-1;for(i=i>=0?i:Math.max(t-Math.abs(i),0);t>i;i++)if(i in r&&r[i]===e)return i;return-1}),Object.isFrozen||(Object.isFrozen=function(e){for(var r="tv4_test_frozen_key";e.hasOwnProperty(r);)r+=Math.random();try{return e[r]=!0,delete e[r],!1}catch(t){return!0}});var f={"+":!0,"#":!0,".":!0,"/":!0,";":!0,"?":!0,"&":!0},p={"*":!0};t.prototype={toString:function(){return this.template},fillFromObject:function(e){return this.fill(function(r){return e[r]})}};var c=function(e,r,t,i,n){if(this.missing=[],this.missingMap={},this.formatValidators=e?Object.create(e.formatValidators):{},this.schemas=e?Object.create(e.schemas):{},this.collectMultiple=r,this.errors=[],this.handleError=r?this.collectError:this.returnError,i&&(this.checkRecursive=!0,this.scanned=[],this.scannedFrozen=[],this.scannedFrozenSchemas=[],this.scannedFrozenValidationErrors=[],this.validatedSchemasKey="tv4_validation_id",this.validationErrorsKey="tv4_validation_errors_id"),n&&(this.trackUnknownProperties=!0,this.knownPropertyPaths={},this.unknownPropertyPaths={}),this.errorReporter=t||l("en"),"string"==typeof this.errorReporter)throw Error("debug");if(this.definedKeywords={},e)for(var a in e.definedKeywords)this.definedKeywords[a]=e.definedKeywords[a].slice(0)};c.prototype.defineKeyword=function(e,r){this.definedKeywords[e]=this.definedKeywords[e]||[],this.definedKeywords[e].push(r)},c.prototype.createError=function(e,r,t,i,n,a,o){return e=new h(e,r,t,i,n),e.message=this.errorReporter(e,a,o),e},c.prototype.returnError=function(e){return e},c.prototype.collectError=function(e){return e&&this.errors.push(e),null},c.prototype.prefixErrors=function(e,r,t){for(;e<this.errors.length;e++)this.errors[e]=this.errors[e].prefixWith(r,t);return this},c.prototype.banUnknownProperties=function(e,r){for(var t in this.unknownPropertyPaths){var i=this.createError(v.UNKNOWN_PROPERTY,{path:t},t,"",null,e,r);if(i=this.handleError(i))return i}return null},c.prototype.addFormat=function(e,r){if("object"==typeof e){for(var t in e)this.addFormat(t,e[t]);return this}this.formatValidators[e]=r},c.prototype.resolveRefs=function(e,r){if(void 0!==e.$ref){if(r=r||{},r[e.$ref])return this.createError(v.CIRCULAR_REFERENCE,{urls:Object.keys(r).join(", ")},"","",null,void 0,e);r[e.$ref]=!0,e=this.getSchema(e.$ref,r)}return e},c.prototype.getSchema=function(e,r){var t;if(void 0!==this.schemas[e])return t=this.schemas[e],this.resolveRefs(t,r);var i=e,n="";if(-1!==e.indexOf("#")&&(n=e.substring(e.indexOf("#")+1),i=e.substring(0,e.indexOf("#"))),"object"==typeof this.schemas[i]){if(t=this.schemas[i],n=decodeURIComponent(n),""===n)return this.resolveRefs(t,r);if("/"!==n.charAt(0))return;for(var n=n.split("/").slice(1),a=0;a<n.length;a++){var o=n[a].replace(/~1/g,"/").replace(/~0/g,"~");if(void 0===t[o]){t=void 0;break}t=t[o]}if(void 0!==t)return this.resolveRefs(t,r)}void 0===this.missing[i]&&(this.missing.push(i),this.missing[i]=i,this.missingMap[i]=i)},c.prototype.searchSchemas=function(e,r){if(Array.isArray(e))for(var t=0;t<e.length;t++)this.searchSchemas(e[t],r);else if(e&&"object"==typeof e){if("string"==typeof e.id){var i;e:{if(i=e.id,i.substring(0,r.length)===r){var n=i.substring(r.length);if(0<i.length&&"/"===i.charAt(r.length-1)||"#"===n.charAt(0)||"?"===n.charAt(0)){i=!0;break e}}i=!1}i&&void 0===this.schemas[e.id]&&(this.schemas[e.id]=e)}for(t in e)"enum"!==t&&("object"==typeof e[t]?this.searchSchemas(e[t],r):"$ref"===t&&(i=o(e[t]))&&void 0===this.schemas[i]&&void 0===this.missingMap[i]&&(this.missingMap[i]=i))}},c.prototype.addSchema=function(e,r){if("string"!=typeof e||"undefined"==typeof r){if("object"!=typeof e||"string"!=typeof e.id)return;r=e,e=r.id}e===o(e)+"#"&&(e=o(e)),this.schemas[e]=r,delete this.missingMap[e],s(r,e),this.searchSchemas(r,e)},c.prototype.getSchemaMap=function(){var e,r={};for(e in this.schemas)r[e]=this.schemas[e];return r},c.prototype.getSchemaUris=function(e){var r,t=[];for(r in this.schemas)e&&!e.test(r)||t.push(r);return t},c.prototype.getMissingUris=function(e){var r,t=[];for(r in this.missingMap)e&&!e.test(r)||t.push(r);return t},c.prototype.dropSchemas=function(){this.schemas={},this.reset()},c.prototype.reset=function(){this.missing=[],this.missingMap={},this.errors=[]},c.prototype.validateAll=function(e,r,t,i,n){var a;if(r=this.resolveRefs(r),!r)return null;if(r instanceof h)return this.errors.push(r),r;var o,s=this.errors.length,l=null,u=null;if(this.checkRecursive&&e&&"object"==typeof e){if(a=!this.scanned.length,e[this.validatedSchemasKey]){var f=e[this.validatedSchemasKey].indexOf(r);if(-1!==f)return this.errors=this.errors.concat(e[this.validationErrorsKey][f]),null}if(Object.isFrozen(e)&&(o=this.scannedFrozen.indexOf(e),-1!==o&&(f=this.scannedFrozenSchemas[o].indexOf(r),-1!==f)))return this.errors=this.errors.concat(this.scannedFrozenValidationErrors[o][f]),null;if(this.scanned.push(e),Object.isFrozen(e))-1===o&&(o=this.scannedFrozen.length,this.scannedFrozen.push(e),this.scannedFrozenSchemas.push([])),l=this.scannedFrozenSchemas[o].length,this.scannedFrozenSchemas[o][l]=r,this.scannedFrozenValidationErrors[o][l]=[];else{if(!e[this.validatedSchemasKey])try{Object.defineProperty(e,this.validatedSchemasKey,{value:[],configurable:!0}),Object.defineProperty(e,this.validationErrorsKey,{value:[],configurable:!0})}catch(p){e[this.validatedSchemasKey]=[],e[this.validationErrorsKey]=[]}u=e[this.validatedSchemasKey].length,e[this.validatedSchemasKey][u]=r,e[this.validationErrorsKey][u]=[]}}if(f=this.errors.length,r=this.validateBasic(e,r,n)||this.validateNumeric(e,r,n)||this.validateString(e,r,n)||this.validateArray(e,r,n)||this.validateObject(e,r,n)||this.validateCombinations(e,r,n)||this.validateHypermedia(e,r,n)||this.validateFormat(e,r,n)||this.validateDefinedKeywords(e,r,n)||null,a){for(;this.scanned.length;)delete this.scanned.pop()[this.validatedSchemasKey];this.scannedFrozen=[],this.scannedFrozenSchemas=[]}if(r||f!==this.errors.length)for(;t&&t.length||i&&i.length;)a=t&&t.length?""+t.pop():null,n=i&&i.length?""+i.pop():null,r&&(r=r.prefixWith(a,n)),this.prefixErrors(f,a,n);return null!==l?this.scannedFrozenValidationErrors[o][l]=this.errors.slice(s):null!==u&&(e[this.validationErrorsKey][u]=this.errors.slice(s)),this.handleError(r)},c.prototype.validateFormat=function(e,r){if("string"!=typeof r.format||!this.formatValidators[r.format])return null;var t=this.formatValidators[r.format].call(null,e,r);return"string"==typeof t||"number"==typeof t?this.createError(v.FORMAT_CUSTOM,{message:t},"","/format",null,e,r):t&&"object"==typeof t?this.createError(v.FORMAT_CUSTOM,{message:t.message||"?"},t.dataPath||"",t.schemaPath||"/format",null,e,r):null},c.prototype.validateDefinedKeywords=function(e,r,t){for(var i in this.definedKeywords)if("undefined"!=typeof r[i])for(var n=this.definedKeywords[i],a=0;a<n.length;a++){var o=(0,n[a])(e,r[i],r,t);if("string"==typeof o||"number"==typeof o)return this.createError(v.KEYWORD_CUSTOM,{key:i,message:o},"","",null,e,r).prefixWith(null,i);if(o&&"object"==typeof o){if(t=o.code,"string"==typeof t){if(!v[t])throw Error("Undefined error code (use defineError): "+t);t=v[t]}else"number"!=typeof t&&(t=v.KEYWORD_CUSTOM);return n="object"==typeof o.message?o.message:{key:i,message:o.message||"?"},i=o.schemaPath||"/"+i.replace(/~/g,"~0").replace(/\//g,"~1"),this.createError(t,n,o.dataPath||null,i,null,e,r)}}return null},c.prototype.validateBasic=function(e,r,t){var i;return(i=this.validateType(e,r,t))||(i=this.validateEnum(e,r,t))?i.prefixWith(null,"type"):null},c.prototype.validateType=function(e,r){if(void 0===r.type)return null;var t=typeof e;null===e?t="null":Array.isArray(e)&&(t="array");var i=r.type;Array.isArray(i)||(i=[i]);for(var n=0;n<i.length;n++){var a=i[n];if(a===t||"integer"===a&&"number"===t&&0===e%1)return null}return this.createError(v.INVALID_TYPE,{type:t,expected:i.join("/")},"","",null,e,r)},c.prototype.validateEnum=function(e,r){if(void 0===r["enum"])return null;for(var t=0;t<r["enum"].length;t++)if(i(e,r["enum"][t]))return null;return this.createError(v.ENUM_MISMATCH,{value:"undefined"!=typeof JSON?JSON.stringify(e):e},"","",null,e,r)},c.prototype.validateNumeric=function(e,r,t){return this.validateMultipleOf(e,r,t)||this.validateMinMax(e,r,t)||this.validateNaN(e,r,t)||null};var d=Math.pow(2,-51),m=1-d;c.prototype.validateMultipleOf=function(e,r){var t=r.multipleOf||r.divisibleBy;if(void 0===t)return null;if("number"==typeof e){var i=e/t%1;if(i>=d&&m>i)return this.createError(v.NUMBER_MULTIPLE_OF,{value:e,multipleOf:t},"","",null,e,r)}return null},c.prototype.validateMinMax=function(e,r){if("number"!=typeof e)return null;if(void 0!==r.minimum){if(e<r.minimum)return this.createError(v.NUMBER_MINIMUM,{value:e,minimum:r.minimum},"","/minimum",null,e,r);if(r.exclusiveMinimum&&e===r.minimum)return this.createError(v.NUMBER_MINIMUM_EXCLUSIVE,{value:e,minimum:r.minimum},"","/exclusiveMinimum",null,e,r)}if(void 0!==r.maximum){if(e>r.maximum)return this.createError(v.NUMBER_MAXIMUM,{value:e,maximum:r.maximum},"","/maximum",null,e,r);if(r.exclusiveMaximum&&e===r.maximum)return this.createError(v.NUMBER_MAXIMUM_EXCLUSIVE,{value:e,maximum:r.maximum},"","/exclusiveMaximum",null,e,r)}return null},c.prototype.validateNaN=function(e,r){return"number"!=typeof e?null:!0===isNaN(e)||1/0===e||-(1/0)===e?this.createError(v.NUMBER_NOT_A_NUMBER,{value:e},"","/type",null,e,r):null},c.prototype.validateString=function(e,r,t){return this.validateStringLength(e,r,t)||this.validateStringPattern(e,r,t)||null},c.prototype.validateStringLength=function(e,r){return"string"!=typeof e?null:void 0!==r.minLength&&e.length<r.minLength?this.createError(v.STRING_LENGTH_SHORT,{length:e.length,minimum:r.minLength},"","/minLength",null,e,r):void 0!==r.maxLength&&e.length>r.maxLength?this.createError(v.STRING_LENGTH_LONG,{length:e.length,maximum:r.maxLength},"","/maxLength",null,e,r):null},c.prototype.validateStringPattern=function(e,r){if("string"!=typeof e||"string"!=typeof r.pattern&&!(r.pattern instanceof RegExp))return null;var t;if(r.pattern instanceof RegExp)t=r.pattern;else{var i="",n=r.pattern.match(/^\/(.+)\/([img]*)$/);n?(t=n[1],i=n[2]):t=r.pattern,t=new RegExp(t,i)}return t.test(e)?null:this.createError(v.STRING_PATTERN,{pattern:r.pattern},"","/pattern",null,e,r)},c.prototype.validateArray=function(e,r,t){return Array.isArray(e)?this.validateArrayLength(e,r,t)||this.validateArrayUniqueItems(e,r,t)||this.validateArrayItems(e,r,t)||null:null},c.prototype.validateArrayLength=function(e,r){var t;return void 0!==r.minItems&&e.length<r.minItems&&(t=this.createError(v.ARRAY_LENGTH_SHORT,{length:e.length,minimum:r.minItems},"","/minItems",null,e,r),this.handleError(t))||void 0!==r.maxItems&&e.length>r.maxItems&&(t=this.createError(v.ARRAY_LENGTH_LONG,{length:e.length,maximum:r.maxItems},"","/maxItems",null,e,r),this.handleError(t))?t:null},c.prototype.validateArrayUniqueItems=function(e,r){if(r.uniqueItems)for(var t=0;t<e.length;t++)for(var n=t+1;n<e.length;n++)if(i(e[t],e[n])){var a=this.createError(v.ARRAY_UNIQUE,{match1:t,match2:n},"","/uniqueItems",null,e,r);if(this.handleError(a))return a}return null},c.prototype.validateArrayItems=function(e,r,t){if(void 0===r.items)return null;var i,n;if(Array.isArray(r.items)){for(n=0;n<e.length;n++)if(n<r.items.length){if(i=this.validateAll(e[n],r.items[n],[n],["items",n],t+"/"+n))return i}else if(void 0!==r.additionalItems)if("boolean"==typeof r.additionalItems){if(!r.additionalItems&&(i=this.createError(v.ARRAY_ADDITIONAL_ITEMS,{},"/"+n,"/additionalItems",null,e,r),this.handleError(i)))return i}else if(i=this.validateAll(e[n],r.additionalItems,[n],["additionalItems"],t+"/"+n))return i}else for(n=0;n<e.length;n++)if(i=this.validateAll(e[n],r.items,[n],["items"],t+"/"+n))return i;return null},c.prototype.validateObject=function(e,r,t){return"object"!=typeof e||null===e||Array.isArray(e)?null:this.validateObjectMinMaxProperties(e,r,t)||this.validateObjectRequiredProperties(e,r,t)||this.validateObjectProperties(e,r,t)||this.validateObjectDependencies(e,r,t)||null},c.prototype.validateObjectMinMaxProperties=function(e,r){var t,i=Object.keys(e);return void 0!==r.minProperties&&i.length<r.minProperties&&(t=this.createError(v.OBJECT_PROPERTIES_MINIMUM,{propertyCount:i.length,minimum:r.minProperties},"","/minProperties",null,e,r),this.handleError(t))||void 0!==r.maxProperties&&i.length>r.maxProperties&&(t=this.createError(v.OBJECT_PROPERTIES_MAXIMUM,{propertyCount:i.length,maximum:r.maxProperties},"","/maxProperties",null,e,r),this.handleError(t))?t:null},c.prototype.validateObjectRequiredProperties=function(e,r){if(void 0!==r.required)for(var t=0;t<r.required.length;t++){var i=r.required[t];if(void 0===e[i]&&(i=this.createError(v.OBJECT_REQUIRED,{key:i},"","/required/"+t,null,e,r),this.handleError(i)))return i}return null},c.prototype.validateObjectProperties=function(e,r,t){var i,n;for(n in e){var a=t+"/"+n.replace(/~/g,"~0").replace(/\//g,"~1"),o=!1;if(void 0!==r.properties&&void 0!==r.properties[n]&&(o=!0,i=this.validateAll(e[n],r.properties[n],[n],["properties",n],a)))return i;if(void 0!==r.patternProperties)for(var s in r.patternProperties)if(new RegExp(s).test(n)&&(o=!0,i=this.validateAll(e[n],r.patternProperties[s],[n],["patternProperties",s],a)))return i;if(o)this.trackUnknownProperties&&(this.knownPropertyPaths[a]=!0,delete this.unknownPropertyPaths[a]);else if(void 0!==r.additionalProperties){if(this.trackUnknownProperties&&(this.knownPropertyPaths[a]=!0,delete this.unknownPropertyPaths[a]),"boolean"==typeof r.additionalProperties){if(!r.additionalProperties&&(i=this.createError(v.OBJECT_ADDITIONAL_PROPERTIES,{key:n},"","/additionalProperties",null,e,r).prefixWith(n,null),this.handleError(i)))return i}else if(i=this.validateAll(e[n],r.additionalProperties,[n],["additionalProperties"],a))return i}else this.trackUnknownProperties&&!this.knownPropertyPaths[a]&&(this.unknownPropertyPaths[a]=!0)}return null},c.prototype.validateObjectDependencies=function(e,r,t){var i;if(void 0!==r.dependencies)for(var n in r.dependencies)if(void 0!==e[n]){var a=r.dependencies[n];if("string"==typeof a){if(void 0===e[a]&&(i=this.createError(v.OBJECT_DEPENDENCY_KEY,{key:n,missing:a},"","",null,e,r).prefixWith(null,n).prefixWith(null,"dependencies"),this.handleError(i)))return i}else if(Array.isArray(a)){for(var o=0;o<a.length;o++)if(i=a[o],void 0===e[i]&&(i=this.createError(v.OBJECT_DEPENDENCY_KEY,{key:n,missing:i},"","/"+o,null,e,r).prefixWith(null,n).prefixWith(null,"dependencies"),this.handleError(i)))return i}else if(i=this.validateAll(e,a,[],["dependencies",n],t))return i}return null},c.prototype.validateCombinations=function(e,r,t){return this.validateAllOf(e,r,t)||this.validateAnyOf(e,r,t)||this.validateOneOf(e,r,t)||this.validateNot(e,r,t)||null},c.prototype.validateAllOf=function(e,r,t){if(void 0===r.allOf)return null;for(var i,n=0;n<r.allOf.length;n++)if(i=this.validateAll(e,r.allOf[n],[],["allOf",n],t))return i;return null},c.prototype.validateAnyOf=function(e,r,t){if(void 0===r.anyOf)return null;var i,n,a=[],o=this.errors.length;this.trackUnknownProperties&&(i=this.unknownPropertyPaths,n=this.knownPropertyPaths);for(var s=!0,l=0;l<r.anyOf.length;l++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var h=this.errors.length,u=this.validateAll(e,r.anyOf[l],[],["anyOf",l],t);if(null===u&&h===this.errors.length){if(this.errors=this.errors.slice(0,o),this.trackUnknownProperties){for(var f in this.knownPropertyPaths)n[f]=!0,delete i[f];for(var p in this.unknownPropertyPaths)n[p]||(i[p]=!0);s=!1;continue}return null}u&&a.push(u.prefixWith(null,""+l).prefixWith(null,"anyOf"))}return this.trackUnknownProperties&&(this.unknownPropertyPaths=i,this.knownPropertyPaths=n),s?(a=a.concat(this.errors.slice(o)),this.errors=this.errors.slice(0,o),this.createError(v.ANY_OF_MISSING,{},"","/anyOf",a,e,r)):void 0},c.prototype.validateOneOf=function(e,r,t){if(void 0===r.oneOf)return null;var i,n,a=null,o=[],s=this.errors.length;this.trackUnknownProperties&&(i=this.unknownPropertyPaths,n=this.knownPropertyPaths);for(var l=0;l<r.oneOf.length;l++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var h=this.errors.length,u=this.validateAll(e,r.oneOf[l],[],["oneOf",l],t);if(null===u&&h===this.errors.length){if(null!==a)return this.errors=this.errors.slice(0,s),this.createError(v.ONE_OF_MULTIPLE,{index1:a,index2:l},"","/oneOf",null,e,r);if(a=l,this.trackUnknownProperties){for(var f in this.knownPropertyPaths)n[f]=!0,delete i[f];for(var p in this.unknownPropertyPaths)n[p]||(i[p]=!0)}}else u&&o.push(u)}return this.trackUnknownProperties&&(this.unknownPropertyPaths=i,this.knownPropertyPaths=n),null===a?(o=o.concat(this.errors.slice(s)),this.errors=this.errors.slice(0,s),this.createError(v.ONE_OF_MISSING,{},"","/oneOf",o,e,r)):(this.errors=this.errors.slice(0,s),null)},c.prototype.validateNot=function(e,r,t){if(void 0===r.not)return null;var i,n,a=this.errors.length;this.trackUnknownProperties&&(i=this.unknownPropertyPaths,n=this.knownPropertyPaths,this.unknownPropertyPaths={},this.knownPropertyPaths={}),t=this.validateAll(e,r.not,null,null,t);var o=this.errors.slice(a);return this.errors=this.errors.slice(0,a),this.trackUnknownProperties&&(this.unknownPropertyPaths=i,this.knownPropertyPaths=n),null===t&&0===o.length?this.createError(v.NOT_PASSED,{},"","/not",null,e,r):null},c.prototype.validateHypermedia=function(e,r,i){if(!r.links)return null;for(var n,a=0;a<r.links.length;a++)if(n=r.links[a],"describedby"===n.rel){n=new t(n.href);for(var o=!0,s=0;s<n.varNames.length;s++)if(!(n.varNames[s]in e)){o=!1;break}if(o&&(n={$ref:n.fillFromObject(e)},n=this.validateAll(e,n,[],["links",a],i)))return n}};var y,v={INVALID_TYPE:0,ENUM_MISMATCH:1,ANY_OF_MISSING:10,ONE_OF_MISSING:11,ONE_OF_MULTIPLE:12,NOT_PASSED:13,NUMBER_MULTIPLE_OF:100,NUMBER_MINIMUM:101,NUMBER_MINIMUM_EXCLUSIVE:102,NUMBER_MAXIMUM:103,NUMBER_MAXIMUM_EXCLUSIVE:104,NUMBER_NOT_A_NUMBER:105,STRING_LENGTH_SHORT:200,STRING_LENGTH_LONG:201,STRING_PATTERN:202,OBJECT_PROPERTIES_MINIMUM:300,OBJECT_PROPERTIES_MAXIMUM:301,OBJECT_REQUIRED:302,OBJECT_ADDITIONAL_PROPERTIES:303,OBJECT_DEPENDENCY_KEY:304,ARRAY_LENGTH_SHORT:400,ARRAY_LENGTH_LONG:401,ARRAY_UNIQUE:402,ARRAY_ADDITIONAL_ITEMS:403,FORMAT_CUSTOM:500,KEYWORD_CUSTOM:501,CIRCULAR_REFERENCE:600,UNKNOWN_PROPERTY:1e3},g={};for(y in v)g[v[y]]=y;var E={INVALID_TYPE:"Invalid type: {type} (expected {expected})",ENUM_MISMATCH:"No enum match for: {value}",ANY_OF_MISSING:'Data does not match any schemas from "anyOf"',ONE_OF_MISSING:'Data does not match any schemas from "oneOf"',ONE_OF_MULTIPLE:'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}',NOT_PASSED:'Data matches schema from "not"',NUMBER_MULTIPLE_OF:"Value {value} is not a multiple of {multipleOf}",NUMBER_MINIMUM:"Value {value} is less than minimum {minimum}",NUMBER_MINIMUM_EXCLUSIVE:"Value {value} is equal to exclusive minimum {minimum}",NUMBER_MAXIMUM:"Value {value} is greater than maximum {maximum}",NUMBER_MAXIMUM_EXCLUSIVE:"Value {value} is equal to exclusive maximum {maximum}",NUMBER_NOT_A_NUMBER:"Value {value} is not a valid number",STRING_LENGTH_SHORT:"String is too short ({length} chars), minimum {minimum}",STRING_LENGTH_LONG:"String is too long ({length} chars), maximum {maximum}",STRING_PATTERN:"String does not match pattern: {pattern}",OBJECT_PROPERTIES_MINIMUM:"Too few properties defined ({propertyCount}), minimum {minimum}",OBJECT_PROPERTIES_MAXIMUM:"Too many properties defined ({propertyCount}), maximum {maximum}",OBJECT_REQUIRED:"Missing required property: {key}",OBJECT_ADDITIONAL_PROPERTIES:"Additional properties not allowed",OBJECT_DEPENDENCY_KEY:"Dependency failed - key must exist: {missing} (due to key: {key})",ARRAY_LENGTH_SHORT:"Array is too short ({length}), minimum {minimum}",ARRAY_LENGTH_LONG:"Array is too long ({length}), maximum {maximum}",ARRAY_UNIQUE:"Array items are not unique (indices {match1} and {match2})",ARRAY_ADDITIONAL_ITEMS:"Additional items not allowed",FORMAT_CUSTOM:"Format validation failed ({message})",KEYWORD_CUSTOM:"Keyword failed: {key} ({message})",CIRCULAR_REFERENCE:"Circular $refs: {urls}",UNKNOWN_PROPERTY:"Unknown property (not in schema)"};h.prototype=Object.create(Error.prototype),h.prototype.constructor=h,h.prototype.name="ValidationError",h.prototype.prefixWith=function(e,r){if(null!==e&&(e=e.replace(/~/g,"~0").replace(/\//g,"~1"),this.dataPath="/"+e+this.dataPath),null!==r&&(r=r.replace(/~/g,"~0").replace(/\//g,"~1"),this.schemaPath="/"+r+this.schemaPath),null!==this.subErrors)for(var t=0;t<this.subErrors.length;t++)this.subErrors[t].prefixWith(e,r);return this};var O={};return y=u(),y.addLanguage("en-gb",E),y.tv4=y});

  var verbose,
      asHash,
      baseUrl,
      baseParams,
      baseHeaders,
      methodOrder = {
        'GET': 0,
        'POST': 1,
        'PUT': 2,
        'PATCH': 3,
        'DELETE': 4,
        'HEAD': 5,
        'OPTIONS': 6,
        'TRACE': 7,
        'CONNECT': 8
      };

  function init(opts){
    opts = opts || {};
    verbose = opts.verbose || false;
    asHash = opts.asHash || false;
    baseUrl = opts.baseUrl || '';
    baseParams = opts.params || {};
    baseHeaders = opts.headers || {};
  }
  init();

  function ref(depth){
    depth = depth || 2;
    var regex = /[^\)]+\(([^\)]+)/,
        matches,
        text = (new Error).stack.split('\n');
    if(text.length < 3) return 'Unknown Location';
    if(depth >= text.length) depth = text.length - 1;
    text = text[depth];
    matches = regex.exec(text);
    if(!matches || matches.length < 2) return text;
    return matches[1];
  }

  function ERRO(message, config, response, details){
    this.type = 'ERRO';
    this.ref = config && config.ref;
    this.message = message;
    this.config = config;
    this.response = response;
    this.details = details;
    this.stacktrace = (new Error()).stack;
  }

  function FAIL(message, config, response, expected, actual){
    this.type = 'FAIL';
    this.ref = config && config.ref;
    this.config = config;
    this.response = response;
    this.message = message;
    this.expected = expected;
    this.actual = actual;
  }

  function PASS(message, config, response){
    this.type = 'PASS';
    this.ref = config && config.ref;
    this.config = config;
    this.response = response;
    this.message = message;
  }

  var isArray = Array.isArray;

  function isObject(value){
    return value !== null && typeof value === 'object';
  }

  function isFunction(value){
    return typeof value === 'function';
  }

  function equalJsonObjects(o1, o2){
    if(!isObject(o1) || !isObject(o2)) return o1 === o2;
    var key, allKeys = {};
    for(key in o1)
      if(o1.hasOwnProperty(key))
        allKeys[key] = key;
    for(key in o2)
      if(o2.hasOwnProperty(key))
        allKeys[key] = key;
    for(key in allKeys){
      if(!equalJsonObjects(o1[key], o2[key])) return false;
    }
    return true;
  }

  function parseEndpoint(endpoint){
    var endpointParts = endpoint.split(' '),
        method = endpointParts.length == 2 ? endpointParts[0].toUpperCase() : 'GET',
        url = endpointParts.length == 2 ? endpointParts[1] : endpointParts[0];
    return {
      'url': url,
      'method': method
    };
  }

  function getHttpConfig(config){
    var httpConfig = {},
        parsedEndpoint = parseEndpoint(config.endpoint),
        url = parsedEndpoint.url;
    httpConfig.method = parsedEndpoint.method;
    if(url.indexOf('http') !== 0){
      url = baseUrl + url;
    }
    if(isObject(config.params) || isObject(baseParams)) {
      var params = baseParams || {};
      for(var key in config.params){
        params[key] = config.params[key];
      }
      var queryString = '';
      for(var key in params){
        if(queryString.length > 1) queryString += '&';
        queryString += key + '=' + params[key];
      }
      if(queryString) url += '?' + queryString;
    }
    httpConfig.url = url;
    if(isObject(baseHeaders) || isObject(config.headers)) {
      httpConfig.headers = '';
      //httpConfig.headers = new Headers();
      var key;
      for(key in baseHeaders){
        httpConfig.headers += key + ': ' + baseHeaders[key] + '\n';
        //httpConfig.headers.set(key, baseHeaders[key]);
      }
      for(key in config.headers){
        httpConfig.headers += key + ': ' + config.headers[key] + '\n';
        //httpConfig.headers.set(key, config.headers);
      }
      if(!httpConfig.headers) delete httpConfig.headers;
    }
    if(config.body && method != 'GET' && method != 'HEAD') {
      httpConfig.body = config.body;
      if(typeof httpConfig.body === 'string') {
        httpConfig.body = JSON.stringify(httpConfig.body);
      }
    }
    return httpConfig;
  }

  function assertOk(config, res){
    return Promise.resolve().then(function(){
      var actualOk = res.ok ? 'OK' : 'Not OK';
      if(config.expectOk != res.ok) {
        return new FAIL(
          "Expected status to be '" + (config.expectOk ? 'OK' : 'Not OK') + "'. Actual: '" + actualOk + "'.",
          config,
          res,
          '200-299',
          res.status
        );
      }
      return new PASS("Response: " + actualOk, config, res);
    });
  }

  function assertStatus(config, res){
    var result;
    if(isFunction(config.expectStatus)){
      result = Promise.resolve(config.expectStatus(res, config));
    }else {
      result = Promise.resolve(config.expectStatus == res.status);
    }
    return result.then(function(expected){
      if(!expected){
        return new FAIL(
          "Expected status '" + config.expectStatus + "'. Actual: '" + res.status + "'.",
          config,
          res,
          config.expectStatus,
          res.status
        );
      }
      return new PASS("Response status: " + res.status, config, res);
    });
  }

  function assertJson(config, res){
    return res.json().then(function(actualJson){
      if(isFunction(config.expectJson)) {
        Promise.resolve(config.expectJson(actualJson, res, config)).then(function(result){
          if(result === false || typeof result === 'string'){
            return new FAIL(
              "Expected JSON to pass custom JSON test.",
              config,
              res,
              '<custom>',
              actualJson
            )
          }
        })
      } else {
        if(!equalJsonObjects(config.expectJson, actualJson)){
          return new FAIL(
            "Expected JSON objects to be equal.",
            config,
            res,
            config.expectJson,
            actualJson
          )
        }
      }
      return new PASS("Expected and actual JSON matched.", config, res);
    })
  }

  function assertJsonSchema(config, res){
    return res.json().then(function(actualJson){
      var valid = tv4.validateResult(actualJson, config.expectJsonSchema, true);
      if(valid.error){
        return new FAIL(
          "Expected JSON schema did not match actual JSON.",
          config,
          res,
          config.expectJsonSchema,
          actualJson
        )
      }
      return new PASS("Expected JSON schema matches actual JSON.", config, res);
    })

    return Promise.resolve(new ERRO(
      "Not yet implemented: 'assertJsonScheme'.",
      config,
      res
    ));
  }

  function assertHeaders(config, res){
    var fails = [],
        headers = isArray(config.expectHeaders)
          ? config.expectHeaders
          : [config.expectHeaders];
    for(var i=0; i < headers.length; i++){
      var expected = headers[i],
          isRegex = expected.value instanceof RegExp,
          actual = res.headers.get(expected.name);
      if(
        (
          isRegex &&
          !expected.value.test(actual)
        ) ||
        !isRegex &&
        expected.value != actual
      ){
        var type = isRegex ? 'match' : 'be';
        fails.push(Promise.resolve(new FAIL(
          "Expected header '" + expected.name + "' to " + type + " '" + expected.value + "'. Actual '" + actual + "'.",
          config,
          res,
          expected.value,
          actual
        )));
      }
    }
    if(!fails.length){
      fails.push(new PASS("Expected and actual headers match.", config, res));
    }
    return fails;
  }

  function assertExpectFn(config, res){
    var fn = config.expect;
    if(!isFunction(fn)) {
      return Promise.resolve(new ERRO(
        "Invalid custom expectation. Must be a function. Actual: '" + (typeof fn) + "'.",
        config,
        res
      ));
    }
    return Promise.resolve(fn(res, config))
      .then(function(subConfig){
        if(subConfig === false || typeof subConfig === 'string'){
          return {
            result: new FAIL(
              subConfig || "Custom expectation failed.",
              config,
              res,
              '<custom>',
              '<custom>'
            )
          };
        }
        return {
          config: subConfig,
          result: new PASS(
            "Custom expectation succeeded.",
            config,
            res
          )
        };
      });
  }

  function test(_config){
    var suitePromises = [],
        results = {};

    function addResults(endpoint, config, res, tests){
      if(!results[endpoint]){
        results[endpoint] = {
          'status': 'OK',
          'count': 0,
          'tests': []
        }
      }
      for(var i=0; i < tests.length; i++){
        if(!(tests[i] instanceof FAIL) && !(tests[i] instanceof ERRO)) {
          if(verbose){
            results[endpoint].tests.push(tests[i]);
          }
          results[endpoint].count++;
          continue;
        }
        results[endpoint].status = 'FAIL';
        results[endpoint].tests.push(tests[i]);
        results[endpoint].count++;
      }
    }

    function runSubTests(customFnResult, config, res){
      customFnResult = customFnResult || {};
      var result = customFnResult.result,
          subConfig = customFnResult.config;
      if(isObject(subConfig)){
        return testRecusively(subConfig).then(function(){
          return result;
        })
      }else {
        return result;
      }
    }

    function testCase(config){
      if(!isObject(_config)) {
        var err = new ERRO("Invalid test case object. Actual: '" + (typeof config) + "'.", config);
        return Promise.reject(err);
      }
      config.ref = config.ref || config.endpoint;
      if(!config.endpoint) {
        var err = new ERRO("Invalid endpoint for test '" + config.ref + "'.", config);
        return Promise.reject(err);
      }
      var endpoint = config.endpoint,
          httpConfig = getHttpConfig(config),
          promise;
      promise = fetch(httpConfig.url, httpConfig)
        .then(function(res){
          var expectations = [];
          if(config.expectOk != void 0) expectations.push(assertOk(config, res));
          if(config.expectStatus) expectations.push(assertStatus(config, res));
          if(config.expectHeaders) expectations = expectations.concat(assertHeaders(config, res));
          if(config.expectJson) expectations.push(assertJson(config, res));
          if(config.expectJsonSchema) expectations.push(assertJsonSchema(config, res));
          if(config.expect) expectations.push(assertExpectFn(config, res).then(function(result){
            return runSubTests(result, config, res);
          }));
          return Promise.all(expectations)
            .then(function(results){
              addResults(endpoint, config, res, results);
            })
        })
        .catch(function(err){
          var message = err && err.message,
              result = new ERRO(message, config, err);
          addResults(endpoint, config, err, [result]);
        })
      suitePromises.push(promise);
      return promise;
    }

    function testRecusively(configArr){
      var testPromises = [];
      if(!isArray(configArr)) configArr = [configArr];
      for(var i=0; i < configArr.length; i++){
        testPromises.push(testCase(configArr[i]));
      }
      return Promise.all(testPromises);
    }
    return testRecusively(_config).then(function(){
      return Promise.all(suitePromises).then(function(){
        if(asHash) return results;
        var arr = [];
        for(var key in results){
          arr.push({
            'endpoint': key,
            'status': results[key].status,
            'tests': results[key].tests,
            'count': results[key].count
          })
        }
        arr.sort(function(a, b){
          var aep = parseEndpoint(a.endpoint),
              bep = parseEndpoint(b.endpoint);
          if(aep.url < bep.url) return -1;
          if(aep.url > bep.url) return 1;
          if(methodOrder[aep.method] < methodOrder[bep.method]) return -1;
          if(methodOrder[aep.method] > methodOrder[bep.method]) return 1;
          return 0;
        })
        return arr;
      });
    });
  }

  return {
    test: test,
    init: init,
    ref: ref
  }

}));
