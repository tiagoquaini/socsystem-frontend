(function(){

  "use strict";
  angular.module('socsystem').factory('ProductService', ['ConnectorWebService', 'CONSTANTS',
    function(ConnectorWebService, CONSTANTS) {

      var oProductService = {};

      oProductService.getProductById = function(sID) {
        return ConnectorWebService.get(CONSTANTS.URL_PRODUCTS + "/" + sID);
      };

      oProductService.getAllProducts = function() {
        return ConnectorWebService.get(CONSTANTS.URL_PRODUCTS);
      };

      oProductService.createProduct = function(oProduct) {
        return ConnectorWebService.post(CONSTANTS.URL_PRODUCTS, oProduct);
      };

      oProductService.deleteProduct = function(sID) {
        return ConnectorWebService.fnDelete(CONSTANTS.URL_PRODUCTS + "/" + sID);
      };

      return oProductService;
    }
  ]);
})();
