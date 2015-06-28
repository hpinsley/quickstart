System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    //'angular2/*':'node_modules/angular2/*.js',
    'rtts_assert/*': '/rtts_assert/*.js',
    //'rx/*': 'node_modules/rx/dist/*.js',
    'pattern_search/*': '/pattern_search/*.js',
    'index': 'index.js'        
  },
  'meta': {
        "rx": {
          "format": "cjs" //https://github.com/systemjs/builder/issues/123
        }
   },
   "map": {
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "rx" : "node_modules/rx/dist/rx"
    //"angular2" : "node_modules/angular2"
  }
});