/**
 * Created by david on 29/04/16.
 */
(function(){
    'use strict';
    angular
        .module('app.components')
        .directive('smallBox', ['$timeout', smallBox]);

    function smallBox($timeout){
        return {
            templateUrl: 'app/components/small-box.html',
            restrict: 'E',
            link: link,
            replace: true,
            scope: {
                params: '='
            }
        };

        function link(scope){
            scope.params = !!scope.params?scope.params:{};
            //noinspection JSPrimitiveTypeWrapperUsage
            scope.params.id = !!scope.params.id?scope.params.id:'sb_'+Math.round(Math.random()*1024);
            $timeout(function(){
                var $footer = $($.parseHTML(scope.params.footer));
                $footer.appendTo($("#footer_"+scope.params.id));
            });
        }

    }

})();