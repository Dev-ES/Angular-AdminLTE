/**
 * Created by david on 28/04/16.
 */
(function(){
    'use strict';
    angular
        .module('app.components')
        .directive('headMenu', ['$timeout', headMenu]);
    
    function headMenu($timeout){

        return {
            templateUrl: 'app/components/head-menu.html',
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

        }
    }
    
})();
