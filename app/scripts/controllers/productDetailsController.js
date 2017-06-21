(function(){

  "use strict";

  angular.module('socsystem').controller('ProductDetailsController', ['$scope', '$state', '$stateParams', 'UserService', 'ProductService', 'WishlistService', 'ShoppingCartService',
    function( $scope, $state, $stateParams, UserService, ProductService, WishlistService, ShoppingCartService ) {

      $scope.user = UserService.getLoggedUser();

      function _receiveProduct(oProduct) {
        $scope.product = oProduct;
      }

      function _receiveProductError() {
        $state.go("products");
      }
      
      ProductService.getProductById($stateParams.id).then(_receiveProduct).catch(_receiveProductError);

      $scope.addToWishlist = function() {
        WishlistService.addProduct($scope.product).then(function() {
          $(".add-wishlist-success-modal").modal();
        });
      };

      $scope.addToShoppingCart = function() {
        ShoppingCartService.addProduct($scope.product).then(function() {
          $state.go("shoppingCart");
        });
      };

    }
  ]);
})();
