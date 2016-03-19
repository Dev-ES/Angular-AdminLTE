/**
 * Created by david on 18/03/16.
 */
describe("Directives", function(){
    var $rootScope, $httpBackend, $scope, $controller, $location, $timeout, vm, $compile;
    beforeEach(function() {
        module('App');
        inject(function($injector, _$httpBackend_, _$controller_, _$location_, _$timeout_, _$compile_) {
            $rootScope = $injector.get('$rootScope');
            $httpBackend = _$httpBackend_;
            $controller = _$controller_;
            $location = _$location_;
            $timeout = _$timeout_;
            $compile = _$compile_;

        });
    });

    it("Directive head-menu", function(){

        var htmlHeadMenu = '<header class="header"> <a ng-href="params.logo.href" class="logo"> <span ng-if="angular.isUndefined(params.logo.image)||angular.isNull(params.logo.image)||!params.logo.image" ng-bind="params.logo.text"></span> <img ng-src="params.logo.image" alt="{{params.logo.text}}" ng-if="angular.isDefined(params.logo.image)"> </a> <nav class="navbar navbar-static-top" role="navigation" id="{{params.id}}"> </nav></header>';
        $httpBackend.when('GET', 'partials/common/directives/head-menu.html')
            .respond(200,htmlHeadMenu);

        $scope = $rootScope.$new();
        vm = $controller('Main', {"$scope" : $scope});
        if(angular.isUndefined($scope.headMenu)){
            $scope.headMenu = {
                logo: {
                    href: '/#/',
                    text: 'Angular AdminLTE Test Spec'
                },
                nav: ['<a href="#/linkTest">Link Test Spec</a>']
            };
        }
        var element = angular.element('<head-menu params="headMenu"></head-menu>');
        $compile(element)($scope);
        $httpBackend.flush();
        $scope.$digest();
        expect(element.text()).toContain($scope.headMenu.logo.text);
        var htmlSpec = element.html();
        expect(htmlSpec.indexOf('<head-menu') === -1).toBe(true);
        expect(htmlSpec).toContain('params.logo.href');
        expect(htmlSpec).toContain('params.logo.text');
    });

    it("Directive small-box", function(){

        var htmlSmallBox = '<div class="small-box bg-aqua" id="{{params.id}}"> <div class="inner"> <h3 ng-bind="params.title"> </h3> <p ng-bind="params.text"> </p></div><div class="icon"> <i ng-class="params.icon"></i> </div><a href="#" class="small-box-footer" id="{{\'footer_\'+params.id}}"> </a></div>';
        $httpBackend.when('GET', 'partials/common/directives/small-box.html')
            .respond(200,htmlSmallBox);

        $scope = $rootScope.$new();
        vm = $controller('Main', {"$scope" : $scope});
        if(angular.isUndefined($scope.boxSpec)){
            $scope.boxSpec = {
                id: 'smallBoxSpec',
                icon: 'ion ion-bag',
                title: '150',
                text: 'Box Spec',
                footer: 'More info <i class="fa fa-arrow-circle-right"></i>'
            };
        }
        var element = angular.element('<small-box params="boxSpec"></small-box>');
        $compile(element)($scope);
        $httpBackend.flush();
        $scope.$digest();
        expect(element.text()).toContain($scope.boxSpec.title);
        var htmlSpec = element.html();
        expect(htmlSpec.indexOf('<small-box') === -1).toBe(true);
        expect(htmlSpec).toContain($scope.boxSpec.id);
        expect(htmlSpec).toContain('footer_'+$scope.boxSpec.id);
        expect(htmlSpec).toContain('params.title');
        expect(htmlSpec).toContain('params.icon');
        expect(htmlSpec).toContain('params.text');
    });



});