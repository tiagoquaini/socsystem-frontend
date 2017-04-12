(function(){

  "use strict";

  angular.module("socsystem", [
    'ui.router', 'pascalprecht.translate',
  ])
  .config(
    [
      '$httpProvider',
      '$locationProvider',
      '$stateProvider',
      '$urlRouterProvider',
      '$translateProvider',
      function($httpProvider, $locationProvider, $stateProvider, $urlRouterProvider, $translateProvider){

        if (!window.devEnv) {
          $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
          });
        }

        //security purposes
        $translateProvider.useSanitizeValueStrategy('escaped');

        $translateProvider.determinePreferredLanguage(function(){
          return 'pt-BR';
        });

        $translateProvider.useStaticFilesLoader({
          prefix: '/assets/i18n/',
          suffix: '.json?$$REVISION$$'
        });

        $stateProvider
        .state('home', {
          url: "/",
          views: {
            '' : {
              templateUrl : '/views/home.html?$$REVISION$$',
              controller : 'HomeController'
            }
          }
        })
        .state('login', {
          url: "/entrar",
          views: {
            '' : {
              templateUrl : '/views/login.html?$$REVISION$$',
              controller : 'LoginController'
            }
          }
        })
        .state('signup', {
          url: "/registrar",
          views: {
            '' : {
              templateUrl : '/views/signup.html?$$REVISION$$',
              controller : 'SignupController'
            }
          }
        })
        .state('wishlist', {
          url: "/lista-desejos",
          views: {
            '' : {
              templateUrl : '/views/wishlist.html?$$REVISION$$',
              controller : 'WishlistController'
            }
          }
        })
        .state('adminDashboard', {
          url: "/admin-dashboard",
          views: {
            '' : {
              templateUrl : '/views/dashboard/adminDashboard.html?$$REVISION$$',
              controller : 'AdminDashboardController'
            }
          }
        })
        .state('adminDashboard.productList', {
          parent : "adminDashboard",
          url: "",
          views: {
            'productList@adminDashboard' : {
              templateUrl : '/views/dashboard/productList.html?$$REVISION$$',
              controller : 'ProductListDashboardController'
            }
          }
        });

        $urlRouterProvider.otherwise('/');
      }
    ]
  );
})();
