/**
 * Created by david on 14/03/16.
 */
(function(){
    'use strict';
    angular.module('App')
        .controller('Main', [main]);

    function main(){
        /* jshint validthis: true */
        var vm = this;

        var htmlMenu1 = '<a href="/#" class="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </a>';
        var htmlMenu2 = '<div class="navbar-right"> <ul class="nav navbar-nav"> <li class="dropdown messages-menu"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-envelope"></i> <span class="label label-success">4</span> </a> <ul class="dropdown-menu"> <li class="header">You have 4 messages</li><li> <ul class="menu"> <li> <a href="#"> <div class="pull-left"> <img src="img/avatar3.png" class="img-circle" alt="User Image"/> </div><h4> Support Team <small><i class="fa fa-clock-o"></i> 5 mins</small> </h4> <p>Why not buy a new awesome theme?</p></a> </li><li> <a href="#"> <div class="pull-left"> <img src="img/avatar2.png" class="img-circle" alt="user image"/> </div><h4> AdminLTE Design Team <small><i class="fa fa-clock-o"></i> 2 hours</small> </h4> <p>Why not buy a new awesome theme?</p></a> </li><li> <a href="#"> <div class="pull-left"> <img src="img/avatar.png" class="img-circle" alt="user image"/> </div><h4> Developers <small><i class="fa fa-clock-o"></i> Today</small> </h4> <p>Why not buy a new awesome theme?</p></a> </li><li> <a href="#"> <div class="pull-left"> <img src="img/avatar2.png" class="img-circle" alt="user image"/> </div><h4> Sales Department <small><i class="fa fa-clock-o"></i> Yesterday</small> </h4> <p>Why not buy a new awesome theme?</p></a> </li><li> <a href="#"> <div class="pull-left"> <img src="img/avatar.png" class="img-circle" alt="user image"/> </div><h4> Reviewers <small><i class="fa fa-clock-o"></i> 2 days</small> </h4> <p>Why not buy a new awesome theme?</p></a> </li></ul> </li><li class="footer"><a href="#">See All Messages</a></li></ul> </li><li class="dropdown notifications-menu"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-warning"></i> <span class="label label-warning">10</span> </a> <ul class="dropdown-menu"> <li class="header">You have 10 notifications</li><li> <ul class="menu"> <li> <a href="#"> <i class="ion ion-ios7-people info"></i> 5 new members joined today </a> </li><li> <a href="#"> <i class="fa fa-warning danger"></i> Very long description here that may not fit into the page and may cause design problems </a> </li><li> <a href="#"> <i class="fa fa-users warning"></i> 5 new members joined </a> </li><li> <a href="#"> <i class="ion ion-ios7-cart success"></i> 25 sales made </a> </li><li> <a href="#"> <i class="ion ion-ios7-person danger"></i> You changed your username </a> </li></ul> </li><li class="footer"><a href="#">View all</a></li></ul> </li><li class="dropdown tasks-menu"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-tasks"></i> <span class="label label-danger">9</span> </a> <ul class="dropdown-menu"> <li class="header">You have 9 tasks</li><li> <ul class="menu"> <li> <a href="#"> <h3> Design some buttons <small class="pull-right">20%</small> </h3> <div class="progress xs"> <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only">20% Complete</span> </div></div></a> </li><li> <a href="#"> <h3> Create a nice theme <small class="pull-right">40%</small> </h3> <div class="progress xs"> <div class="progress-bar progress-bar-green" style="width: 40%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only">40% Complete</span> </div></div></a> </li><li> <a href="#"> <h3> Some task I need to do <small class="pull-right">60%</small> </h3> <div class="progress xs"> <div class="progress-bar progress-bar-red" style="width: 60%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only">60% Complete</span> </div></div></a> </li><li> <a href="#"> <h3> Make beautiful transitions <small class="pull-right">80%</small> </h3> <div class="progress xs"> <div class="progress-bar progress-bar-yellow" style="width: 80%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only">80% Complete</span> </div></div></a> </li></ul> </li><li class="footer"> <a href="#">View all tasks</a> </li></ul> </li><li class="dropdown user user-menu"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="glyphicon glyphicon-user"></i> <span>Jane Doe <i class="caret"></i></span> </a> <ul class="dropdown-menu"> <li class="user-header bg-light-blue"> <img src="img/avatar3.png" class="img-circle" alt="User Image"/> <p> Jane Doe - Web Developer <small>Member since Nov. 2012</small> </p></li><li class="user-body"> <div class="col-xs-4 text-center"> <a href="#">Followers</a> </div><div class="col-xs-4 text-center"> <a href="#">Sales</a> </div><div class="col-xs-4 text-center"> <a href="#">Friends</a> </div></li><li class="user-footer"> <div class="pull-left"> <a href="#" class="btn btn-default btn-flat">Profile</a> </div><div class="pull-right"> <a href="#" class="btn btn-default btn-flat">Sign out</a> </div></li></ul> </li></ul> </div>';

        vm.headMenu = {
            logo: {
                href: '/#/',
                text: 'Angular AdminLTE'
            },
            nav: [htmlMenu1, htmlMenu2]
        };

        vm.box1 = {
            id: 'smallBox1',
            icon: 'ion ion-bag',
            title: '150',
            text: 'New Orders',
            footer: 'More info <i class="fa fa-arrow-circle-right"></i>'
        };

        vm.sideBarLeft = {
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
                    href: 'javascript:void(0)'
                },
                {
                    icon: 'fa fa-th',
                    text: 'Widgets',
                    href: 'javascript:void(0)'
                },
                {
                    icon: 'fa fa-bar-chart-o',
                    text: 'Charts',
                    href: 'javascript:void(0)',
                    subMenus: [
                        {
                            text: 'Morris',
                            href: 'javascript:void(0)'
                        },
                        {
                            text: 'Flot',
                            href: 'javascript:void(0)'
                        },
                        {
                            text: 'Inline charts',
                            href: 'javascript:void(0)'
                        }
                    ]
                },
                {
                    icon: 'fa fa-laptop',
                    text: 'UI Elements',
                    href: 'javascript:void(0)',
                    subMenus: [
                        {
                            text: 'General',
                            href: 'javascript:void(0)'
                        },
                        {
                            text: 'Icons',
                            href: 'javascript:void(0)'
                        },
                        {
                            text: 'Buttons',
                            href: 'javascript:void(0)'
                        },
                        {
                            text: 'Sliders',
                            href: 'javascript:void(0)'
                        },
                        {
                            text: 'Timeline',
                            href: 'javascript:void(0)'
                        }
                    ]
                }
            ]
        };

    }

})();