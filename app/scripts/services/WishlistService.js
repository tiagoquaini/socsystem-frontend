(function(){

  "use strict";
  angular.module('socsystem').factory('WishlistService', ['ConnectorWebService', 'CONSTANTS',
    function(ConnectorWebService, CONSTANTS) {

      var oWishlistService = {
        items: []
      };

      function getItems() {
        return oWishlistService.items;
      }

      function setItems(aItems) {
        oWishlistService.items = aItems;
      }

      oWishlistService.getWishlist = function() {
        return ConnectorWebService.get(CONSTANTS.URL_WISHLIST);
      };

      oWishlistService.addProduct = function(oProduct) {
        var aWishlist = getItems(),
            bWishlistCreation = aWishlist.length === 0;

        aWishlist.push(oProduct);

        setItems(aWishlist);

        if (bWishlistCreation) {
          return ConnectorWebService.post(CONSTANTS.URL_WISHLIST, aWishlist);
        }

        return ConnectorWebService.put(CONSTANTS.URL_WISHLIST, aWishlist);
      };

      oWishlistService.removeProduct = function(oProduct) {
        var aWishlist = getItems();

        for (var i = 0, len = aWishlist.length; i < len; i++) {
          if (aWishlist[i] === oProduct) {
            aWishlist.splice(i, 1);
            break;
          }
        }

        setItems(aWishlist);

        return ConnectorWebService.put(CONSTANTS.URL_WISHLIST, aWishlist);
      };

      return oWishlistService;
    }
  ]);
})();
