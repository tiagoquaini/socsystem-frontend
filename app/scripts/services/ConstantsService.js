(function(){

  "use strict";

  angular.module('socsystem').factory('CONSTANTS', function(){

    var oConstants = {};

    oConstants.URL_BACKEND = "/api";

    oConstants.URL_USERS = oConstants.URL_BACKEND + "/users";

    return oConstants;

  });
})();
