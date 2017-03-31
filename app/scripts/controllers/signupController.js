(function(){

  "use strict";

  angular.module('socsystem').controller('SignupController', ['$scope', '$translate', 'UserService',
    function( $scope, $translate, UserService ) {

      function _validateForm() {
        if (!$scope.name || $scope.name.trim() === "" 
            || !$scope.email || $scope.email.trim() === "" 
            || !$scope.password || $scope.password.trim() === "") {
          return false;
        }
        return true;
      }

      $scope.createUser = function() {
        if (!_validateForm()) {
          _showErrorModal();
          return;
        }

        UserService.createUser({
          name: $scope.name,
          email: $scope.email,
          password: $scope.password
        });
      };

    }
  ]);
})();
