(function(){

  "use strict";

  angular.module('socsystem').controller('ProductListDashboardController', ['$scope', 'ProductService',
    function( $scope, ProductService ) {

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

      function _createProductSuccess(res) {
        $scope.aProducts.push(res.data);
        $(".new-product-modal").modal("hide");
      }

      $scope.createProduct = function() {
        ProductService.createProduct($scope.newProduct)
        .then(_createProductSuccess);
      };

      function _receiveAllProducts(aProducts) {
        $scope.aProducts = aProducts;
      }

      ProductService.getAllProducts().then(_receiveAllProducts);

    }
  ]);
})();
