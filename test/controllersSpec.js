/**
 * Created by david on 18/03/16.
 */
describe("Controllers", function(){
    var $rootScope, $httpBackend, $scope, $controller, $location, $timeout, $routeProvider, vm;
    beforeEach(function() {
        module('app');
        inject(function($injector, _$httpBackend_, _$controller_, _$location_, _$timeout_) {
            $rootScope = $injector.get('$rootScope');
            $httpBackend = _$httpBackend_;
            $controller = _$controller_;
            $location = _$location_;
            $timeout = _$timeout_;

        });
    });

    it("Controller Main", function(){
        $scope = $rootScope.$new();
        vm = $controller('main', {"$scope" : $scope});
        expect(vm).toBeDefined();
        expect(vm.headMenu).toBeDefined();
        expect($location.path() === '/');
    });
});