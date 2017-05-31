(function(){

  "use strict";

  angular.module('socsystem').controller('WishlistController', ['$scope', 'UserService', 'WishlistService',
    function( $scope, UserService, WishlistService ) {

      $scope.user = UserService.getLoggedUser();
      
      function _logoutSuccess() {
        $scope.user = null;
      }

      $scope.logout = function() {
        UserService.logout().then(_logoutSuccess);
      };

      WishlistService.getWishlist().then(function(res) {
        $scope.aWishlistProducts = res.products;
      })

      $scope.removeProductClick = function(oProduct) {
        $scope.oProductToRemove = oProduct;
        $(".remove-product-modal").modal();
      };

      $scope.aWishlistProducts = [
        {
          img: "../assets/img/camiseta1.jpg",
          title: "aaa",
          price: "50,30"
        },
        {
          img: "../assets/img/camiseta1.jpg",
          title: "aaa",
          price: "50,30"
        },
        {
          img: "../assets/img/camiseta1.jpg",
          title: "aaa",
          price: "50,30"
        },
        {
          img: "../assets/img/camiseta1.jpg",
          title: "aaa",
          price: "50,30"
        },
        {
          img: "../assets/img/camiseta1.jpg",
          title: "aaa",
          price: "50,30"
        }
      ];

    }
  ]);
})();
