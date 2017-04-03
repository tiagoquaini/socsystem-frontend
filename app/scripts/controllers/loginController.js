(function(){

  "use strict";

  angular.module('socsystem').controller('LoginController', ['$scope', '$state', 'UserService',
    function( $scope, $state, UserService ) {

      $scope.disableLoginBtn = function() {
        if (!$scope.email || $scope.email.trim() === "" 
            || !$scope.password || $scope.password.trim() === "") {
          return true;
        }
        return false;
      }

      function _loginError() {
        $(".error-modal").modal();
      }

      function _loginSuccess() {
        $state.go("home");
      }

      $scope.login = function() {
        UserService.login({
          email: $scope.email,
          password: $scope.password
        })
        .then(_loginSuccess)
        .catch(_loginError);
      };

    }
  ]);
})();
