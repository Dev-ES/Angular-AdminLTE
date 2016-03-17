/**
 * Created by david on 14/03/16.
 */
(function(){
    'use strict';

    angular.module('App')
        .directive('headMenu', ['$timeout', headMenu]);

    function headMenu($timeout){

        return {
                templateUrl: 'partials/common/directives/head-menu.html',
            restrict: 'E',
            link: link,
            replace: true,
            scope: {
                params: '='
            }
        };

        function link(scope){
            if(angular.isUndefined(scope.params) || !scope.params){
                throw new Error("Params is not defined!");
            }
            scope.params.logo = angular.isDefined(scope.params.logo)?scope.params.logo:{};
            scope.params.id = angular.isDefined(scope.params.id)?scope.params.id:Math.round(Math.random()*10000);

            $timeout(function(){
                var $nav = $("#"+scope.params.id);
                if(angular.isDefined(scope.params.nav) && !!scope.params.nav.length){
                    for (var index in scope.params.nav){
                        $(scope.params.nav[index]).appendTo($nav);
                    }
                }
            })

        }
    }

})();