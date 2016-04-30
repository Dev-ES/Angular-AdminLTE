/**
 * Created by david on 17/03/16.
 */
(function(){
    'use strict';
    angular.module('app.components')
        .directive('sidebarLeft', ['$timeout', sidebarLeft]);

    function sidebarLeft($timeout){
        return {
            templateUrl: 'app/components/sidebar-left.html',
            restrict: 'E',
            link: link,
            replace: true,
            scope: {
                params: '='
            }
        };

        function link(scope, $el){

            if (angular.isUndefined(scope.params) || !scope.params){
                throw new Error("params não definido!");
            }
            scope.params.id = angular.isUndefined(scope.params.id)?"sideBarLeft"+(Math.round(Math.random()*10)):scope.params.id;

            $timeout(function(){

                $("li.treeview > ul").parent().children("a").click(function(){
                    var $this = $(this);
                    var $active = $("li.treeview.active");
                    var $menu = $this.parent().children(".treeview-menu");
                    if($active.length) {
                        $active.removeClass("active");
                        if ($active[0] === $this.parent()[0]) {
                            $this.children(".fa-angle-down").first().removeClass("fa-angle-down").addClass("fa-angle-left");
                            $menu.slideUp();
                            return;
                        }
                        $active.children(".treeview-menu").slideUp();
                        $active.children("a").children(".fa-angle-down").first().removeClass("fa-angle-down").addClass("fa-angle-left");
                    }
                    $menu.slideDown();
                    $this.children(".fa-angle-left").first().removeClass("fa-angle-left").addClass("fa-angle-down");
                    $this.parent().addClass("active");

                });

            });
        }

    }

})();