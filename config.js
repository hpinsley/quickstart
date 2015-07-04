System.config(
  {
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    'rx/*': 'node_modules/rx/*.js'
  //   "*": "*.js",
  //   "github:*": "jspm_packages/github/*.js",
  //   'rtts_assert/*': '/rtts_assert/*.js',
  //   'pattern_search/*': '/pattern_search/*.js',
  //   'index': 'index.js'        
  // },
  // 'meta': {
  //       "rx": {
  //         "format": "cjs" //https://github.com/systemjs/builder/issues/123
  //       }
    },
   "map": {
     //"angular2" : "node_modules/angular2",
    // "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    // "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    //"rx" : "node_modules/rx/dist/rx.lite"
  }
});