(function(){

  "use strict";

  angular.module('socsystem').controller('ProductListDashboardController', ['$scope', 'ProductService',
    function( $scope, ProductService ) {

      function _getAllProducts() {
        ProductService.getAllProducts().then(_receiveAllProducts);
      }

      _getAllProducts();

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

      $scope.deleteProduct = function(oProduct) {
        ProductService.deleteProduct(oProduct._id)
        .then(_getAllProducts);
      };

      function _receiveAllProducts(aProducts) {
        $scope.aProducts = aProducts;
      }

    }
  ]);
})();
