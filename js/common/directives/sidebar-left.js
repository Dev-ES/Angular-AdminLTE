/**
 * Created by david on 17/03/16.
 */
(function(){
    'use strict';
    angular.module('App')
        .directive('sidebarLeft', ['$timeout', sidebarLeft]);

    function sidebarLeft($timeout){
        return {
            templateUrl: 'partials/common/directives/sidebar-left.html',
            restrict: 'E',
            link: link,
            replace: true,
            scope: {
                params: '='
            }
        };

        function link(scope){

            $timeout(function(){

                scope.menuClick = function(){

                }

            });
        }

    }

})();