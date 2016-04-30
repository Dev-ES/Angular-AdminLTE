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
            crumble.trail.map(crumbleActive)
        });

        vm.headMenu = {
            logo: {
                href: '/',
                text: 'Angular AdminLTE'
            },
            toggleClick: leftMenuEvent
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
                    active: true,
                    icon: 'fa fa-dashboard',
                    text: 'Dashboard',
                    href: ''
                },
                {
                    icon: 'fa fa-th',
                    text: 'Widgets',
                    href: ''
                },
                {
                    icon: 'fa fa-bar-chart-o',
                    text: 'Charts',
                    href: '',
                    subMenus: [
                        {
                            text: 'Morris',
                            href: ''
                        },
                        {
                            text: 'Flot',
                            href: ''
                        },
                        {
                            text: 'Inline charts',
                            href: ''
                        }
                    ]
                },
                {
                    icon: 'fa fa-laptop',
                    text: 'UI Elements',
                    href: '',
                    subMenus: [
                        {
                            text: 'General',
                            href: ''
                        },
                        {
                            text: 'Icons',
                            href: ''
                        },
                        {
                            text: 'Buttons',
                            href: ''
                        },
                        {
                            text: 'Sliders',
                            href: ''
                        },
                        {
                            text: 'Timeline',
                            href: ''
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
