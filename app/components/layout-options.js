/**
 * Created by david on 01/05/16.
 */
(function(){
    'use strict';
    angular
        .module('app.components')
        .directive('layoutOptions', ['$timeout', layoutOptions]);

    function layoutOptions(timeout){

        return {
            templateUrl: 'app/components/layout-options.html',
            restrict: 'E',
            link: link,
            replace: true,
            scope: {
                params: '='
            }
        };

        function link(scope){
            var $body = $("body");

            scope.params = angular.isUndefined(scope.params) || angular.isUndefined(scope.params.skins) ? {} :scope.params;
            var defaultOpt = {
                skins: [
                    {
                        'name': 'Black',
                        'class': 'skin-black'
                    },
                    {
                        'name': 'Blue',
                        'class': 'skin-blue'
                    }
                ],
                options: [
                    {
                        'name': 'Fixed layout',
                        'model': false,
                        'optFn': function (vm) {
                            $body.toggleClass("fixed");
                            if (!$("body").hasClass("fixed")) {

                            }

                        }
                    }
                ],
                model: $body.hasClass("skin-black")?'skin-black':'skin-blue'
            };

            scope.params = $.extend(true,scope.params,defaultOpt);

            scope.params.id = "lopt_"+Math.round(Math.random()*10);

            scope.params.open = false;

            scope.params.changeSkin = changeSkin;

            scope.params.clickOpen = clickOpen;

            function changeSkin(skin) {
                scope.params.skins.forEach(function (sk) {
                    if($body.hasClass(sk.class)){
                        $body.removeClass(sk.class);
                    }
                });
                $body.addClass(skin.class);
            }

            function clickOpen() {
                scope.params.open = !scope.params.open;
                $("#"+scope.params.id).css("right", scope.params.open?"200px":"0px");
            }
        }
    }

})();
