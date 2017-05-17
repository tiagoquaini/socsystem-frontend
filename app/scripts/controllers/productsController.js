(function(){

  "use strict";

  angular.module('socsystem').controller('ProductsController', ['$scope', '$state', 'UserService',
    function( $scope, $state, UserService ) {

      $scope.user = UserService.getLoggedUser();

    }
  ]);
})();
