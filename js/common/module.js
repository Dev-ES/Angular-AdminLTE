/**
 * Created by david on 14/03/16.
 */
(function(){
    'use strict';
    angular.module('App', [])
        .config( [
            '$compileProvider',
            function( $compileProvider ){
                $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
            }
        ]);
})();