/**
 * Created by david on 17/03/16.
 */
(function(){
    'use strict';
    angular.module('App')
        .directive('smallBox', ['$timeout', smallBox]);

    function smallBox($timeout){
        return {
            templateUrl: 'partials/common/directives/small-box.html',
            restrict: 'E',
            link: link,
            replace: true,
            scope: {
                params: '='
            }
        };

        function link(scope){

            scope.params = !!scope.params?scope.params:{};
            scope.params.id = !!scope.params.id?scope.params.id:'sb_'+Math.roud(Math.random()*10024);

            $timeout(function(){
                var $footer = $($.parseHTML(scope.params.footer));
                $footer.appendTo($("#footer_"+scope.params.id));
            });
        }

    }

})();