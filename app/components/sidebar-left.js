/**
 * Created by david on 17/03/16.
 */
(function(){
    'use strict';
    angular
        .module('app.components')
        .directive('sidebarLeft', ['$rootScope', '$location', sidebarLeft]);

    function sidebarLeft(rootScope, location){
        return {
            templateUrl: 'app/components/sidebar-left.html',
            restrict: 'E',
            link: link,
            replace: true,
            scope: {
                params: '='
            }
        };

        function link(scope){
            //Error if not have parameter
            if (angular.isUndefined(scope.params) || !scope.params){
                throw new Error("params não definido!");
            }
            scope.params.id = angular.isUndefined(scope.params.id)?"sideBarLeft"+(Math.round(Math.random()*10)):scope.params.id;
            
            rootScope.$on('$routeChangeSuccess', function() {
                scope.params.menus.forEach(function (menu) {

                    var _hasSubMenu = angular.isDefined(menu.subMenus);

                    //If a rota do menu é a mesma acessada no evento ative o menu
                    if(activeByPath(menu, menu.href[0]==='/'?menu.href:'/'+menu.href)){
                        return;
                    }

                    if(_hasSubMenu){
                        menu.subMenus.forEach(function (sm) {
                            activeByPath(menu, sm.href[0]==='/'?sm.href:'/'+sm.href);
                        });
                    }

                    removeActive(menu, _hasSubMenu);

                });

                /**
                 * Ativa o menu se o path informado for igual ao acessado no momento
                 * @param menu
                 * @param _path
                 * @returns {boolean}
                 */
                function activeByPath(menu, _path) {
                    var _hasSubMenu = angular.isDefined(menu.subMenus);
                    //Se a rota do menu é a mesma acessada no evento ative o menu
                    if(_path === location.path()){
                        activeMenu(menu, _hasSubMenu);
                        return true;
                    }
                    return false;
                }

            });

            //Id privados para cada menu e submenu
            scope.params.menus.map(function (menu) {
                menu._id = "menu_"+Math.round(Math.random()*1024);
                if(angular.isDefined(menu.subMenus)){
                    menu.subMenus.map(function (subMenu) {
                        subMenu._id = menu._id+"_subMenu_"+Math.round(Math.random()*1024);
                        return subMenu;
                    });
                }
                return menu;
            });

            scope.clickMenu = clickMenu;
            /**
             * Enables or disables the menu and show or hide submenus according to the context
             * @param menu
             */
            function clickMenu(menu) {

                var actives = scope.params.menus.filter(function (el) {
                    return !!el.active;
                });
                var hasSubMenu = angular.isDefined(menu.subMenus)&&!!menu.subMenus.length;

                //Se o menu clicado for igual ao ativo
                if(actives.length===1&&actives[0]===menu){
                    if(hasSubMenu){
                        removeActive(menu, hasSubMenu);
                    }
                    return;
                }

                //Se possui submenu e o atual está ativo simplesmente oculta-os
                if(hasSubMenu&&menu.active){
                    removeActive(menu,hasSubMenu);
                    return;
                }

                //Se possui mais de 1 ativo e o atual clicado possui submenu
                if(actives.length > 1 && hasSubMenu){
                    actives.forEach(function (ac) {
                        var hasAcSub = angular.isDefined(ac.subMenus);
                        if(hasAcSub){
                            removeActive(ac, hasAcSub);
                        }
                    });
                }

                //Se possui ativos e o atual clicado não possui submenus
                if(actives.length && !hasSubMenu){
                    actives.forEach(function (ac) {
                        removeActive(ac, angular.isDefined(ac.subMenus));
                    });
                }

                activeMenu(menu,hasSubMenu);


            }

            /**
             * Activate menu and show submenus
             * @param menu
             * @param hasSubMenu
             */
            function activeMenu(menu, hasSubMenu) {
                menu.active = true;
                if(hasSubMenu){
                    $("#"+menu._id).children(".treeview-menu").slideDown();
                }
            }

            /**
             * Dismiss menu and hide submenus
             * @param menu
             * @param hasSubMenu
             */
            function removeActive(menu, hasSubMenu) {
                if(hasSubMenu){
                    $("#"+menu._id).children(".treeview-menu").slideUp();
                }
                menu.active = false;
            }
        }

    }

})();