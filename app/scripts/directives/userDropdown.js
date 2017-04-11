(function(){

  "use strict";

  angular.module("socsystem").directive("userDropdown", function() {
  return {
    restrict: "E",
    scope: {
      hideCartOption: "=",
      hideWishlistOption: "="
    },
    templateUrl: "/views/directives/user-dropdown.html",
    controller: ['$scope', 'UserService', function($scope, UserService) {
      
      $scope.user = UserService.getLoggedUser();
      
      function _logoutSuccess() {
        $scope.user = null;
      }

      $scope.logout = function() {
        UserService.logout().then(_logoutSuccess);
      };

    }]
  };
});
})();