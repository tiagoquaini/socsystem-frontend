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
          //get the language of the browser or language selected by user
          var localStorageLang = null;
          if (window.localStorage) {
            localStorageLang = window.localStorage.getItem("preferredLanguage");
          }
          var lang = localStorageLang || window.navigator.userLanguage || window.navigator.language;
          //if it is not portuguese, then return english
          return lang === 'pt-BR' ? 'pt-BR' : 'en-US';
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
        });

        $urlRouterProvider.otherwise('/');
      }
    ]
  );
})();
