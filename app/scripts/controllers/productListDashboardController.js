(function(){

  "use strict";

  angular.module('socsystem').controller('ProductListDashboardController', ['$scope', '$state', 'UserService',
    function( $scope, $state, UserService ) {

      $scope.newProductClick = function() {
        $scope.newProduct = {};
        $(".new-product-modal").modal();
      };

      $scope.disableSaveBtn = function() {
        var bComplete = $scope.newProduct && $scope.newProduct.name && $scope.newProduct.name.trim() !== "" &&
              $scope.newProduct.description && $scope.newProduct.description.trim() !== "" &&
              $scope.newProduct.price && $scope.newProduct.price != null;
        return !bComplete;
      };

      $scope.aProducts = [
        {
          img: "../assets/img/camiseta1.jpg",
          name: "aaa",
          description: "bbb",
          price: "50,30"
        },
        {
          img: "../assets/img/camiseta1.jpg",
          name: "aaa",
          description: "bbb",
          price: "50,30"
        },
        {
          img: "../assets/img/camiseta1.jpg",
          name: "aaa",
          description: "bbb",
          price: "50,30"
        },
        {
          img: "../assets/img/camiseta1.jpg",
          name: "aaa",
          description: "bbb",
          price: "50,30"
        }
      ];

    }
  ]);
})();
