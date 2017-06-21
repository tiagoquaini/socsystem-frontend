(function(){

  "use strict";

  angular.module('socsystem').controller('ShoppingCartController', ['$scope', 'UserService', 'ShoppingCartService',
    function( $scope, UserService, ShoppingCartService ) {

      $scope.user = UserService.getLoggedUser();
      
      function _logoutSuccess() {
        $scope.user = null;
      }

      function _getShoppingCart() {
        ShoppingCartService.getShoppingCart().then(function(res) {
          $scope.aShoppingCartProducts = res.products;
        });
      }

      _getShoppingCart();

      $scope.logout = function() {
        UserService.logout().then(_logoutSuccess);
      };

      $scope.calculateSubtotal = function() {
        var total = 0,
            aProducts = $scope.aShoppingCartProducts;
        
        if (!aProducts) {
          return total;
        }
        
        for (var i = 0, len = aProducts.length; i < len; i++) {
          total += aProducts[i].price * (aProducts[i].quantity || 0);
        }

        return total;
      };

      $scope.removeProductClick = function(oProduct) {
        $scope.oProductToRemove = oProduct;
        $(".remove-product-modal").modal();
      };

      $scope.confirmRemoveProduct = function() {
        ShoppingCartService.removeProduct($scope.oProductToRemove).then(_getShoppingCart);
      };

    }
  ]);
})();
