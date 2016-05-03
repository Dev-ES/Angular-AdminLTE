/**
 * Created by david on 03/05/16.
 * Angular-AdminLTE
 */
(function () {
    'use strict';
    angular
        .module('app.components')
        .directive('alert', ['$timeout', alert]);

    function alert(timeout) {
        var _defaultFa = {
            'danger': 'fa-ban',
            'info': 'fa-info',
            'warning': 'fa-warning',
            'success': 'fa-check'
        };
        return {
            templateUrl: 'app/components/alert.html',
            restrict: 'E',
            link: link,
            replace: true,
            scope: {
                params: '='
            }
        };
        
        function link(scope) {
            //Directiva usada sem nenhum parâmetro
            if(angular.isUndefined(scope.params)){
                throw new Error("params não definido!");
            }

            //Directiva sem tipo permitido
            if(Object.keys(_defaultFa).indexOf(scope.params.type) === -1){
                throw new Error("type não é válido!");
            }

            scope.params.id = angular.isDefined(scope.params.id) &&
                (angular.isString(scope.params.id) || angular.isNumber(scope.params.id)) ? scope.params.id :
                "alert_"+Math.round(Math.random()*123);

            scope._fa = angular.isString(scope.params.fa) ? scope.params.fa : _defaultFa[scope.params.type];

            timeout(function () {
                $($.parseHTML(scope.params.content)).appendTo(
                    $("#"+scope.params.id)
                );
            });

        }
        
    }

})();