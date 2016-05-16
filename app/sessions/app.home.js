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

        vm.alert = {
            type: 'danger',
            content: '<b>DANGER ALERT:</b> This is a text. <p>This is a paragraph.</p>'
        };
    }

})();
