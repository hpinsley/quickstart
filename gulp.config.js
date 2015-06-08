module.exports = function() {

    var root = './';
    var client = './app/';
    var temp = './.tmp/';

    var config = {

        /**
         * File paths
         */

        alles6: [
            client + '**/*.es6'
        ],

        build: './build/',
        
        traceur: {
            options: {
                annotations: true
            }
        }

    };


    return config;
}