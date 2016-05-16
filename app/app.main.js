/**
 * Created by david on 28/04/16.
 * Main controller
 */
(function(){
    'use strict';
    angular
        .module('app')
        .controller('main', ['$rootScope', '$scope', '$location', 'crumble', main]);
    
    function main(rootScope, scope, location, crumble){
        /* jshint validthis: true */
        var vm = this;

        /* Breadcrumble configuration */
        scope.crumble = crumble;
        rootScope.$on('$routeChangeSuccess', function() {
            crumble.update();
            crumble.trail.map(crumbleActive);
        });

        vm.headMenu = {
            logo: {
                href: '/',
                text: 'Angular AdminLTE'
            },
            toggleClick: leftMenuEvent
        };

        vm.layoutOptions = {
            
        };
        
        vm.sideBarLeft = {
            id: 'leftMenu',
            user: {
                image: {class: 'img-circle', alt: 'Avatar', src: 'img/avatar3.png'},
                salutation: 'Hello',
                name: 'Jane',
                status: {
                    class: "text-success",
                    text: 'Online'
                }
            },
            search: {
                placeholder: 'Search...',
                click: function(){}
            },
            menus: [
                {
                    icon: 'fa fa-dashboard',
                    text: 'Dashboard',
                    href: 'dashboard'
                },
                {
                    icon: 'fa fa-th',
                    text: 'Widgets',
                    href: 'widgets'
                },
                {
                    icon: 'fa fa-bar-chart-o',
                    text: 'Charts',
                    href: 'charts',
                    subMenus: [
                        {
                            text: 'Morris',
                            href: 'charts/morris'
                        },
                        {
                            text: 'Flot',
                            href: 'charts/flot'
                        },
                        {
                            text: 'Inline charts',
                            href: 'charts/flot'
                        }
                    ]
                },
                {
                    icon: 'fa fa-laptop',
                    text: 'UI Elements',
                    href: 'ui-elements',
                    subMenus: [
                        {
                            text: 'General',
                            href: 'ui-elements/general'
                        },
                        {
                            text: 'Icons',
                            href: 'ui-elements/icons'
                        },
                        {
                            text: 'Buttons',
                            href: 'ui-elements/buttons'
                        },
                        {
                            text: 'Sliders',
                            href: 'ui-elements/sliders'
                        },
                        {
                            text: 'Timeline',
                            href: 'ui-elements/timeline'
                        }
                    ]
                }
            ]
        };
        
        function leftMenuEvent(){
            //If window is small enough, enable sidebar push menu
            if ($(window).width() <= 992) {
                $('.row-offcanvas').toggleClass('active');
                $('.left-side').removeClass("collapse-left");
                $(".right-side").removeClass("strech");
                $('.row-offcanvas').toggleClass("relative");
            } else {
                //Else, enable content streching
                $('.left-side').toggleClass("collapse-left");
                $(".right-side").toggleClass("strech");
            }
        }

        function crumbleActive(bc, i) {
            bc.active = i===crumble.trail.length-1 && location.path() ===bc.path;
            return bc;
        }
        
    }

})();
