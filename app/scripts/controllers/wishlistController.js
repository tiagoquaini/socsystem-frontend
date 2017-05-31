(function(){

  "use strict";

  angular.module('socsystem').controller('WishlistController', ['$scope', 'UserService', 'WishlistService',
    function( $scope, UserService, WishlistService ) {

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

    }
  ]);
})();
