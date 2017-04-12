(function(){

  "use strict";

  angular.module('socsystem').factory('CONSTANTS', function(){

    var oConstants = {};

    oConstants.URL_BACKEND = "/api";

    oConstants.URL_LOGIN = oConstants.URL_BACKEND + "/auth/login";
    oConstants.URL_LOGOUT = oConstants.URL_BACKEND + "/auth/logout";
    oConstants.URL_SIGNUP = oConstants.URL_BACKEND + "/auth/signup";
    
    oConstants.URL_PRODUCTS = oConstants.URL_BACKEND + "/products";

    return oConstants;

  });
})();
