(function(){

  "use strict";

  angular.module('socsystem').controller('HomeController', ['$scope', 'UserService',
    function( $scope, UserService ) {

      $scope.user = UserService.getLoggedUser();
      
      function _logoutSuccess() {
        $scope.user = null;
      }

      $scope.logout = function() {
        UserService.logout().then(_logoutSuccess);
      };

    }
  ]);
})();
