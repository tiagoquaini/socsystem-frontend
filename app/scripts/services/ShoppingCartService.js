(function(){

  "use strict";
  angular.module('socsystem').factory('ShoppingCartService', ['ConnectorWebService', 'CONSTANTS',
    function(ConnectorWebService, CONSTANTS) {

      var oShoppingCartService = {
        items: []
      };

      function getItems() {
        return oShoppingCartService.items;
      }

      function setItems(aItems) {
        oShoppingCartService.items = aItems;
      }

      oShoppingCartService.getShoppingCart = function() {
        return ConnectorWebService.get(CONSTANTS.URL_SHOPPING_CART);
      };

      oShoppingCartService.addProduct = function(oProduct) {
        var aShoppingCart = getItems(),
            bShoppingCartCreation = aShoppingCart.length === 0;

        aShoppingCart.push(oProduct);

        setItems(aShoppingCart);

        if (bShoppingCartCreation) {
          return ConnectorWebService.post(CONSTANTS.URL_SHOPPING_CART, aShoppingCart);
        }

        return ConnectorWebService.put(CONSTANTS.URL_SHOPPING_CART, aShoppingCart);
      };

      oShoppingCartService.removeProduct = function(oProduct) {
        var aShoppingCart = getItems();

        for (var i = 0, len = aShoppingCart.length; i < len; i++) {
          if (aShoppingCart[i] === oProduct) {
            aShoppingCart.splice(i, 1);
            break;
          }
        }

        setItems(aShoppingCart);

        return ConnectorWebService.put(CONSTANTS.URL_SHOPPING_CART, aShoppingCart);
      };

      oShoppingCartService.confirmPurchase = function() {
        return ConnectorWebService.fnDelete(CONSTANTS.URL_SHOPPING_CART);
      };

      return oShoppingCartService;
    }
  ]);
})();
