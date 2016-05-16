/**
 * Created by david on 14/03/16.
 */
(function(){
    'use strict';
    angular
        .module('app')
        .config(routerProvider);

    /**
     * Router configuration
     * @param $routeProvider
     * @param $locationProvider
     */
    function routerProvider($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/sessions/app.home.html',
                controller: 'home',
                controllerAs: 'HOME',
                label: 'Home',
                subTitle: 'Angular AdminLTE'
            })
            .when('/dashboard', {
                templateUrl: 'app/sessions/app.home.html',
                controller: 'home',
                controllerAs: 'HOME',
                label: 'Dashboard',
                subTitle: 'Control panel'
            })
            .otherwise({
                redirectTo: '/404'
            });

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }

})();
