/**
 * Created by david on 18/03/16.
 */
describe("Directives", function(){
    var $rootScope, $httpBackend, $scope, $controller, $location, $timeout, $compile, crumble;
    beforeEach(function() {
        module('app');
        inject(function($injector, _$httpBackend_, _$controller_, _$location_, _$timeout_, _$compile_, _crumble_) {
            $rootScope = $injector.get('$rootScope');
            $httpBackend = _$httpBackend_;
            $controller = _$controller_;
            $location = _$location_;
            $timeout = _$timeout_;
            $compile = _$compile_;
            crumble = _crumble_;


            $httpBackend.when('GET', 'app/sessions/app.home.html')
                .respond(200, "")

        });
    });

    it("Directive head-menu", function(){

        var htmlHeadMenu = '<header class="header"> <a ng-href="params.logo.href" class="logo"> <span ng-if="angular.isUndefined(params.logo.image)||angular.isNull(params.logo.image)||!params.logo.image" ng-bind="params.logo.text"></span> <img ng-src="params.logo.image" alt="{{params.logo.text}}" ng-if="angular.isDefined(params.logo.image)"> </a> <nav class="navbar navbar-static-top" role="navigation" id="{{params.id}}"> </nav></header>';
        $httpBackend.when('GET', 'app/components/head-menu.html')
            .respond(200,htmlHeadMenu);

        $scope = $rootScope.$new();

        if(angular.isUndefined($scope.headMenu)){
            $scope.headMenu = {
                logo: {
                    href: '/#/',
                    text: 'Angular AdminLTE Test Spec'
                }
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

    it("Directive sidebar-left", function(){

        var htmlSidebarLeft = '<div><aside class="left-side sidebar-offcanvas" id="{{params.id}}"> <section class="sidebar"> <div ng-if="!!params.user" class="user-panel"> <div ng-if="!!params.user.image" class="pull-left image"> <img ng-src="{{params.user.image.src || params.user.image}}" ng-class="params.user.image.class || \'img-circle\'" alt="{{params.user.image.alt||\'User Image\'}}"/> </div><div ng-if="!!params.user.name" class="pull-left info"> <p ng-bind=" (!!params.user.salutation?params.user.salutation+\', \':\'\')+params.user.name"></p><a ng-if="!!params.user.status" href="javascript:void(0)"> <i class="fa fa-circle" ng-class="params.user.status.class"></i>{{params.user.status.text}}</a> </div></div><form ng-if="!!params.search" class="sidebar-form"> <div class="input-group"> <input type="text" name="q" class="form-control" placeholder="{{params.search.placeholder}}"/> <span class="input-group-btn"> <button type=\'button\' name=\'search\' id=\'search-btn\' class="btn btn-flat" ng-click="params.search.click"><i class="fa fa-search"></i></button> </span> </div></form> <ul class="sidebar-menu"> <li ng-repeat="menu in params.menus" class="treeview" ng-class="{\'active\': !!menu.active}"> <a ng-href="{{menu.href}}"> <i ng-class="menu.icon"></i> <span ng-bind="menu.text"></span> <i ng-if="!!menu.subMenus&&!!menu.subMenus.length" class="fa fa-angle-left pull-right"></i> </a> <ul class="treeview-menu" ng-if="!!menu.subMenus&&!!menu.subMenus.length"> <li ng-repeat="subMenu in menu.subMenus"> <a ng-href="{{subMenu.href}}"> <i class="fa fa-angle-double-right"></i>{{subMenu.text}}</a> </li></ul> </li></ul> </section> </aside></div>';
        $httpBackend.when('GET', 'app/components/sidebar-left.html')
            .respond(200,htmlSidebarLeft);

        $scope = $rootScope.$new();

        $scope.leftMenu = {
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

        var element = angular.element('<sidebar-left params="leftMenu"></sidebar-left>');
        $compile(element)($scope);
        $httpBackend.flush();
        $scope.$digest();
        expect(element.html()).toContain('id="'+$scope.leftMenu.id+'"');
        expect(element.text()).toContain($scope.leftMenu.user.name);
        expect(element.text()).toContain($scope.leftMenu.menus[0].text);

    });

    it("Directive small-box", function(){

        var htmlSmallBox = '<div class="small-box bg-aqua" id="{{params.id}}"> <div class="inner"> <h3 ng-bind="params.title"> </h3> <p ng-bind="params.text"> </p></div><div class="icon"> <i ng-class="params.icon"></i> </div><a href="#" class="small-box-footer" id="{{\'footer_\'+params.id}}"> </a></div>';
        $httpBackend.when('GET', 'app/components/small-box.html')
            .respond(200,htmlSmallBox);

        $scope = $rootScope.$new();

        $scope.boxSpec = {
            id: 'smallBoxSpec',
            icon: 'ion ion-bag',
            title: '150',
            text: 'Box Spec',
            footer: 'More info <i class="fa fa-arrow-circle-right"></i>'
        };

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

    it("Directive content-header", function(){

        var htmlSmallBox = '<section class="content-header"><h1>{{route.current.label}} <small ng-bind="route.current.subTitle"></small></h1><ol class="breadcrumb"><li ng-repeat="bc in crumble.trail" class="active"><a ng-href="{{bc.path}}" ng-bind="bc.label" ng-if="!bc.active"></a>{{bc.active?bc.label:\'\'}}</li></ol></section>';
        $httpBackend.when('GET', 'app/components/content-header.html')
            .respond(200,htmlSmallBox);

        $scope = $rootScope.$new();
        $scope.crumble = crumble;

        var element = angular.element('<content-header crumble="crumble"></content-header>');
        $compile(element)($scope);
        $httpBackend.flush();
        $scope.$digest();
        var htmlSpec = element.html();
        expect(htmlSpec).toContain('crumble');
        expect(htmlSpec).toContain('Home');
        expect(htmlSpec).toContain('breadcrumb');
    });



});