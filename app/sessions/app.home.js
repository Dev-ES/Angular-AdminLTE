/**
 * Created by david on 28/04/16.
 */
(function(){
    'use strict';
    angular
        .module('app.sessions')
        .controller('home', home);
    
    function home(){
        /* jshint validthis: true */
        var vm = this;
        
        vm.box1 = {
            id: 'smallBox1',
            icon: 'ion ion-bag',
            title: '150',
            text: 'New Orders',
            footer: 'More info <i class="fa fa-arrow-circle-right"></i>'
        };
    }

})();
