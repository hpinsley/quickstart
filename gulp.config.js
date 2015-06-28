module.exports = function() {

    var root = './';
    var client = './app/';
    var temp = './.tmp/';

    var config = {

        /**
         * File paths
         */

        typescriptFiles: [
          "scripts/app.ts",
          "app/components/**/*.ts"
        ],


        alles6: [
            client + '**/*.es6'
        ],

        build: './build/',
        
        traceur: {
            options: {
                annotations: true
                //sourceMaps: true
            }
        },
        
        index: 'index.html',
        styles: client + '**/*.scss'

    };


    return config;
    
    /*
    Traceur options for reference:
    annotations: false,
  arrayComprehension: false,
  arrowFunctions: true,
  asyncFunctions: false,
  blockBinding: true,
  classes: true,
  commentCallback: false,
  computedPropertyNames: true,
  debug: false,
  defaultParameters: true,
  destructuring: true,
  exponentiation: false,
  forOf: true,
  freeVariableChecker: false,
  generatorComprehension: false,
  generators: true,
  memberVariables: false,
  moduleName: false,
  modules: 'register',
  numericLiterals: true,
  outputLanguage: 'es5',
  propertyMethods: true,
  propertyNameShorthand: true,
  referrer: '',
  require: false,
  restParameters: true,
  script: false,
  sourceMaps: false,
  spread: true,
  symbols: false,
  templateLiterals: true,
  typeAssertionModule: null,
  typeAssertions: false,
  types: false,
  unicodeEscapeSequences: true,
  unicodeExpressions: true,
  validate: false,
  */
}