(function(){

  "use strict";

  angular.module('socsystem').controller('ProductsController', ['$scope', '$state', 'UserService', 'ProductService',
    function( $scope, $state, UserService, ProductService ) {

      $scope.user = UserService.getLoggedUser();

      $scope.aProducts = [];

      ProductService.getAllProducts()
      .then(function(aProducts) {
        $scope.aProducts = aProducts;
      });

    }
  ]);
})();
