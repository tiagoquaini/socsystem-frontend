(function(){

  "use strict";
  angular.module('socsystem').factory('UserService', ['ConnectorWebService', 'CONSTANTS',
    function(ConnectorWebService, CONSTANTS) {

      var oUserService = {
        oUser : null
      };

      oUserService.createUser = function(oUser) {
        return ConnectorWebService.post(CONSTANTS.URL_USERS, oUser);
      };

      return oUserService;
    }
  ]);
})();
