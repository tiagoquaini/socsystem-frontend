(function(){

  "use strict";

  angular.module('socsystem').controller('ProductDetailsController', ['$scope', '$state', '$stateParams', 'UserService', 'ProductService',
    function( $scope, $state, $stateParams, UserService, ProductService ) {

      $scope.user = UserService.getLoggedUser();

      function _receiveProduct(oProduct) {
        $scope.product = oProduct;
      }

      function _receiveProductError() {
        $state.go("products");
      }

      ProductService.getProductById($stateParams.id).then(_receiveProduct).catch(_receiveProductError);

    }
  ]);
})();
