(function(){

  "use strict";

  angular.module('socsystem').controller('SignupController', ['$scope', 'UserService',
    function( $scope, UserService ) {

      $scope.disableRegisterBtn = function() {
        if (!$scope.name || $scope.name.trim() === "" 
            || !$scope.email || $scope.email.trim() === "" 
            || !$scope.password || $scope.password.trim() === "") {
          return true;
        }
        return false;
      }

      function _userCreateError() {
        $(".error-modal").modal();
      }

      function _userCreateSuccess(oUser) {

      }

      $scope.createUser = function() {
        UserService.createUser({
          name: $scope.name,
          email: $scope.email,
          password: $scope.password
        })
        .then(_userCreateSuccess)
        .catch(_userCreateError);
      };

    }
  ]);
})();
