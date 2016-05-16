/**
 * Created by david on 30/04/16.
 */
(function(){
    'use strict';
    angular
        .module('app.components')
        .directive('contentHeader', ['$route', contentHeader]);

    function contentHeader(route){

        return {
            templateUrl: 'app/components/content-header.html',
            restrict: 'E',
            link: link,
            replace: true,
            scope: {
                crumble: '='
            }
        };

        function link(scope){
            scope.route = route;
        }
    }

})();