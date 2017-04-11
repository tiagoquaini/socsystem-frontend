(function(){

  "use strict";

  angular.module('socsystem').controller('HomeController', ['$scope', 'UserService',
    function( $scope, UserService ) {

      $scope.user = UserService.getLoggedUser();

    }
  ]);
})();
