/**
 * Created by david on 14/03/16.
 */
(function(){
    'use strict';
    /*Modules*/
    angular
        .module('app.components', []);
    /*Sessions*/
    angular
        .module('app.sessions', []);

    /*App*/
    angular
        .module('app', [
            'app.components',
            'app.sessions',
            'crumble',
            'ngRoute'
        ]);
})();
