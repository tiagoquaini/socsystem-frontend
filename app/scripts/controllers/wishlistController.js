(function(){

  "use strict";

  angular.module('socsystem').controller('WishlistController', ['$scope', '$state', 'UserService', 'WishlistService', 'ShoppingCartService',
    function( $scope, $state, UserService, WishlistService, ShoppingCartService ) {

      $scope.user = UserService.getLoggedUser();
      
      function _logoutSuccess() {
        $scope.user = null;
      }

      function _getWishlist() {
        WishlistService.getWishlist().then(function(res) {
          $scope.aWishlistProducts = res.products;
        });
      }

      _getWishlist();

      $scope.logout = function() {
        UserService.logout().then(_logoutSuccess);
      };

      $scope.removeProductClick = function(oProduct) {
        $scope.oProductToRemove = oProduct;
        $(".remove-product-modal").modal();
      };

      $scope.confirmRemoveProduct = function() {
        WishlistService.removeProduct($scope.oProductToRemove).then(_getWishlist);
      };

      $scope.addToCart = function(oProduct) {
        ShoppingCartService.addProduct(oProduct).then(function() {
          $state.go("shoppingCart");
        });
      };

    }
  ]);
})();
