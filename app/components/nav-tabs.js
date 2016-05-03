/**
 * Created by david on 02/05/16.
 */
(function(){
    'use strict';
    angular
        .module('app.components')
        .directive('navTabs', ['$timeout', navTabs]);

    function navTabs(timeout){
        return {
            templateUrl: 'app/components/nav-tabs.html',
            restrict: 'E',
            link: link,
            replace: true,
            scope: {
                params: '='
            }
        };

        function link(scope){
            //Directiva usada sem nenhum parâmetro
            if(angular.isUndefined(scope.params) || angular.isUndefined(scope.params.length)){
                throw new Error("params não definido ou inválido!");
            }

            //scope.id = 'content-nav-'+Math.round(Math.random()*10);

            scope.params.forEach(function (tab) {
                if(angular.isDefined(tab.id)){
                    return;
                }
                tab.id = 'tab_'+Math.round(Math.random()*100);
            });

            timeout(function () {
                scope.params.forEach(function (tab) {
                    var $content = $($.parseHTML(tab.content));
                    $content.appendTo($("#"+tab.id));
                });
            });

        }

    }

})();