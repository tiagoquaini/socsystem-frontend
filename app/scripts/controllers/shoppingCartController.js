(function(){

  "use strict";

  angular.module('socsystem').controller('ShoppingCartController', ['$scope', '$state', 'UserService', 'ShoppingCartService',
    function( $scope, $state, UserService, ShoppingCartService ) {

      $scope.oCard = {
        name: null,
        cvc: null,
        number: null,
        expiration: null
      };

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

      $scope.openCheckoutModal = function() {
        $('.checkout-modal').modal();
      };

      $scope.confirmCheckout = function() {
        if ($scope.isAllCreditCardFieldsFilled()) {
          ShoppingCartService.confirmPurchase().then(function() {
            $state.go("home");
          });
          $('.checkout-modal').modal('toggle');
          return true;
        }
        return false;
      };

      $scope.isAllCreditCardFieldsFilled = function(){
        return ($scope.oCard.cvc && $scope.oCard.number && $scope.oCard.name && $scope.oCard.expiration);
      };

    }
  ]);
})();
